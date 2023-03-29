import { combineName, parseUserAgent } from 'src/utils/ua';

interface TResponse<T> {
  code: string;
  data: T;
  success: boolean;
  message: string;
}

interface TCreateRoom {
  name: string;
  address: string;
  password: string;
  group: string;
  tags: Record<string, any>;
}

const resolveProtocol = () => {
  const { protocol } = new URL(document.currentScript?.baseURI || '');
  if (protocol.startsWith('https')) {
    return ['https://', 'wss://'];
  }
  return ['http://', 'ws://'];
};

export default class Request {
  protocol: string[] = [];

  constructor(public base: string = '') {
    /* c8 ignore next 3 */
    if (!base) {
      throw Error('The api base url cannot be empty');
    }
    this.protocol = resolveProtocol();
  }

  createRoom(project: string): Promise<TResponse<TCreateRoom>> {
    const device = parseUserAgent();
    const name = combineName(device);
    return fetch(
      `${this.protocol[0]}${this.base}/room/create?name=${name}&group=${project}`,
      {
        method: 'GET',
      },
    )
      .then((res) => res.json())
      .catch((err) => {
        /* c8 ignore next */
        throw Error(`Request create room failed: ${err.message}`);
      });
  }

  getRoomUrl(args: Record<string, string | number> = {}) {
    const params = Object.keys(args).reduce((acc, cur, index, arr) => {
      const val = args[cur];
      if (val == null) return acc;
      let kv = `${cur}=${val}`;
      if (index < arr.length - 1) {
        kv += '&';
      }
      return acc + kv;
    }, '');
    return `${this.protocol[1]}${this.base}/ws/room/join?${params}`;
  }
}
