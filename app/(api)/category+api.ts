import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {

    try{
        const sql = neon(`${process.env.DATABASE_URL}`);
        const { clerkId } = await request.json();

        if(!clerkId) {
            return Response.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const response = await sql`
            INSERT INTO users (name, email, clerk_id)
            VALUES (${clerkId})
            `;

        return new Response(JSON.stringify(response), { status: 201, });
    } catch (error) {
        console.log(error);
        return Response.json( {error: error}, { status: 500 });
    }
}