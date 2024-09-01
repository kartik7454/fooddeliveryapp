import { NextRequest } from "next/server";





export async function POST(request:NextRequest) {
    const body = await request.json()
                
    console.log("hii")
    console.log(body)
  return Response.json("okay");
}