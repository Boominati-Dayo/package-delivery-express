import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Tracking from '@/models/Tracking';
import { sendShipperEmail, sendReceiverEmail } from '@/lib/email';
import { v4 as uuidv4 } from 'uuid';

const generateTrackingNumber = (): string => {
  const prefix = 'PDE';
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${prefix}${timestamp}${random}`;
};

export async function GET() {
  try {
    await connectDB();
    const trackings = await Tracking.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: trackings });
  } catch (error) {
    console.error('Error fetching trackings:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch trackings' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    
    const trackingNumber = generateTrackingNumber();
    
    const tracking = new Tracking({
      ...body,
      trackingNumber,
      status: body.status || 'Pending',
      currentLocation: body.origin,
      shipmentHistory: body.shipmentHistory || [{
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString('en-US', { hour12: false }),
        location: body.origin,
        status: 'Pending',
        updatedBy: 'System',
        remarks: 'Shipment created'
      }]
    });

    await tracking.save();

    // Send emails
    if (body.shipperEmail) {
      try {
        await Promise.all([
          sendShipperEmail({
            trackingNumber,
            shipperName: body.shipperName,
            shipperEmail: body.shipperEmail,
            receiverName: body.receiverName,
            receiverEmail: body.receiverEmail,
            origin: body.origin,
            destination: body.destination,
            expectedDeliveryDate: body.expectedDeliveryDate,
            status: body.status || 'Pending',
            currentLocation: body.origin
          }),
          sendReceiverEmail({
            trackingNumber,
            shipperName: body.shipperName,
            shipperEmail: body.shipperEmail,
            receiverName: body.receiverName,
            receiverEmail: body.receiverEmail,
            origin: body.origin,
            destination: body.destination,
            expectedDeliveryDate: body.expectedDeliveryDate,
            status: body.status || 'Pending',
            currentLocation: body.origin
          })
        ]);
      } catch (emailError) {
        console.error('Failed to send notification emails:', emailError);
      }
    }

    return NextResponse.json({
      success: true,
      data: { id: tracking._id, trackingNumber }
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating tracking:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create tracking' },
      { status: 500 }
    );
  }
}