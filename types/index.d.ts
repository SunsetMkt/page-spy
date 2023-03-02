export interface InitConfig {
  /**
   * The server base url. For example, "example.com".
   * - Create room: `${api}/room/create`
   * - Filter romm: `${api}/room/list`
   */
  api?: string;
  /**
   * Client host. Form example, "https://example.com".
   *
   */
  clientHost?: string;
}

export * as SpySocket from './lib/socket-event';
export * as SpyMessage from './lib/message-type';
export * as SpyAtom from './lib/atom';

export * as SpyConsole from './lib/console';
export * as SpySystem from './lib/system';
export * as SpyNetwork from './lib/network';
export * as SpyStorage from './lib/storage';
export * as SpyPage from './lib/page';

class PageSpy {}

export default PageSpy;
