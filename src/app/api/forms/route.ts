import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const formsDirectory = path.join(process.cwd(), 'public', 'forms');
    
    // Create forms directory if it doesn't exist
    if (!fs.existsSync(formsDirectory)) {
      fs.mkdirSync(formsDirectory, { recursive: true });
    }

    const files = fs.readdirSync(formsDirectory);
    
    const forms = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.pdf', '.doc', '.docx'].includes(ext);
      })
      .map(file => {
        const filePath = path.join(formsDirectory, file);
        const stats = fs.statSync(filePath);
        return {
          name: path.parse(file).name.replace(/-/g, ' ').replace(/_/g, ' '),
          path: `/forms/${file}`,
          lastModified: stats.mtime.toISOString(),
        };
      })
      .sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime());

    return NextResponse.json(forms);
  } catch (error) {
    console.error('Error reading forms directory:', error);
    return NextResponse.json(
      { error: 'Failed to read forms directory' },
      { status: 500 }
    );
  }
} 