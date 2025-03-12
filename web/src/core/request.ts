type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestProps {
  url: string;
  method: RequestMethod;
  query?: any;
  body?: any;
}

interface DefaultResponse<T> {
  data: T;
  success: boolean;
}

const formatParams = (url: string, params: Record<string, any>): string => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      value.forEach((val) => searchParams.append(key, val));
    } else {
      searchParams.append(key, value);
    }
  }

  return `${url}?${searchParams.toString()}`;
};

const request = async <T = any>({
  url,
  method = "GET",
  query,
  body,
}: RequestProps): Promise<DefaultResponse<T>> => {
  try {
    const finalUrl = !query ? url : formatParams(url, query);

    const config = {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(finalUrl, config);

    let json;
    try {
      json = await response.json();
    } catch {
      json = null;
    }

    if (response.ok) {
      console.log("json", json);
      return json;
    } else {
      return {
        data: null as T,
        success: false,
      };
    }
  } catch (error) {
    console.log("Error when fetching...", error);

    return {
      data: null as T,
      success: false,
    };
  }
};

export default request;
