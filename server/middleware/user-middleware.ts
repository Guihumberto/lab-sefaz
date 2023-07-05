import type { IncomingMessage, ServerResponse } from "http";
// import { useCookie } from 'h3'

export default async (req: IncomingMessage, res: ServerResponse) => {
    // const userCookie = useCookie(req, "userCookie");
    // res.statusCode = 200
    // @ts-ignore
    req.user = 'Humbert0' //userCookie;
};

