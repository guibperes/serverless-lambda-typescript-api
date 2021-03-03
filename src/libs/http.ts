const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

interface HttpResponse {
  headers?: object;
  statusCode?: number;
  sendCORSHeaders?: boolean;
}

export interface HttpSuccessResponse extends HttpResponse {
  result: object;
}

export interface HttpErrorResponse extends HttpResponse {
  message: string;
}

const createResponse = ({
  result,
  headers,
  statusCode,
  sendCORSHeaders = true,
}: HttpSuccessResponse) => ({
  statusCode,
  headers: sendCORSHeaders ? { ...corsHeaders, ...headers } : headers,
  body: JSON.stringify(result),
});

const send = ({
  result,
  headers,
  statusCode = 200,
  sendCORSHeaders = true,
}: HttpSuccessResponse) =>
  createResponse({ statusCode, result, headers, sendCORSHeaders });

const sendError = ({
  message,
  headers,
  statusCode = 500,
  sendCORSHeaders = true,
}: HttpErrorResponse) =>
  createResponse({
    statusCode,
    sendCORSHeaders,
    headers,
    result: { error: message },
  });

export const Http = { send, sendError };
