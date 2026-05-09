import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Tracking from '@/models/Tracking';
import { sendStatusUpdateEmail } from '@/lib/email';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ trackingNumber: string }> }
) {
  try {
    await connectDB();
    const { trackingNumber } = await params;
    
    const tracking = await Tracking.findOne({ trackingNumber });
    
    if (!tracking) {
      return NextResponse.json(
        { success: false, error: 'Tracking not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: tracking });
  } catch (error) {
    console.error('Error fetching tracking:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tracking' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ trackingNumber: string }> }
) {
  try {
    await connectDB();
    const { trackingNumber } = await params;
    const body = await request.json();
    const { newHistoryEntry, sendEmailNotification, ...updateFields } = body;

    let updateQuery = {
      ...updateFields,
      lastUpdated: new Date()
    };

    let tracking = await Tracking.findOne({ trackingNumber });
    
    if (!tracking) {
      return NextResponse.json(
        { success: false, error: 'Tracking not found' },
        { status: 404 }
      );
    }

    if (newHistoryEntry) {
      updateQuery = {
        $set: {
          ...updateFields,
          lastUpdated: new Date()
        },
        $push: {
          shipmentHistory: newHistoryEntry
        }
      };
    }

    tracking = await Tracking.findOneAndUpdate(
      { trackingNumber },
      updateQuery,
      { new: true }
    );

    if (sendEmailNotification !== false && tracking) {
      try {
        await sendStatusUpdateEmail({
          trackingNumber: tracking.trackingNumber,
          shipperName: tracking.shipperName,
          shipperEmail: tracking.shipperEmail,
          receiverName: tracking.receiverName,
          receiverEmail: tracking.receiverEmail,
          origin: tracking.origin,
          destination: tracking.destination,
          expectedDeliveryDate: tracking.expectedDeliveryDate || '',
          status: tracking.status,
          currentLocation: tracking.currentLocation || tracking.destination,
          carrier: tracking.carrier,
          shipmentMode: tracking.shipmentMode,
          totalFreight: tracking.totalFreight,
        });
      } catch (emailError) {
        console.error('Failed to send status update emails:', emailError);
      }
    }

    return NextResponse.json({ success: true, data: tracking });
  } catch (error) {
    console.error('Error updating tracking:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update tracking' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ trackingNumber: string }> }
) {
  try {
    await connectDB();
    const { trackingNumber } = await params;

    const tracking = await Tracking.findOneAndDelete({ trackingNumber });

    if (!tracking) {
      return NextResponse.json(
        { success: false, error: 'Tracking not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Tracking deleted' });
  } catch (error) {
    console.error('Error deleting tracking:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete tracking' },
      { status: 500 }
    );
  }
}