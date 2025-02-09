function createHttpResponse(status: number, message: string) {
  return {
    status,
    message
  }
};

export const http404 = createHttpResponse (404, 'Not found');
export const http501 = createHttpResponse (501, 'Not implemented');
