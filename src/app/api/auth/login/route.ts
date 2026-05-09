import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/lib/auth';

const ADMIN_EMAIL = 'admin@packagedeliveryexpress.com';
const ADMIN_PASSWORD = 'Boomin@ti100$';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (email.toLowerCase() === ADMIN_EMAIL.toLowerCase() && password === ADMIN_PASSWORD) {
      const token = generateToken({
        userId: 'admin-1',
        email: ADMIN_EMAIL,
        role: 'admin'
      });

      return NextResponse.json({
        success: true,
        data: {
          token,
          user: {
            id: 'admin-1',
            email: ADMIN_EMAIL,
            name: 'Admin',
            role: 'admin',
            permissions: ['all']
          }
        }
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: 'Login failed' },
      { status: 500 }
    );
  }
}