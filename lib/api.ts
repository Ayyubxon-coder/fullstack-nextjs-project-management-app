import { User } from '@prisma/client';

interface IFetcher {
  url: string;
  method: 'POST' | 'GET' | 'PUT' | 'PATCH';
  body: User | { name: string } | AuthType;
  json?: boolean;
}
export const fetcher = async ({ url, method, body, json = true }: IFetcher) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    // handle your errors
    throw new Error('API error');
  }

  if (json) {
    const data = await res.json();
    return data.data;
  }
};

interface AuthType {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const register = (user: AuthType): Promise<any> => {
  return fetcher({ url: '/register', method: 'POST', body: user });
};

export const signin = (user: AuthType): Promise<any> => {
  return fetcher({ url: '/signin', method: 'POST', body: user });
};

export const createNewProject = async (name: string): Promise<any> => {
  return fetcher({
    url: '/api/project',
    method: 'POST',
    body: { name },
    json: true,
  });
};
