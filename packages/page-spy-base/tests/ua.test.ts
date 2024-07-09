import { parseUserAgent } from 'page-spy-base/src';

// The following `userAgent` info generated by ChatGpt.
describe('Parse navigator.userAgent', () => {
  const ua: any = {
    Google: {
      PC: {
        Windows:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
        Mac: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
      },
      iOS: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/93.0.4577.63 Mobile/15E148 Safari/604.1',
      Android:
        'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Mobile Safari/537.36',
    },
    Firefox: {
      PC: {
        Windows:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0',
        Mac: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:92.0) Gecko/20100101 Firefox/92.0',
      },
      iOS: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/36.0 Mobile/15E148 Safari/605.1.15',
      Android:
        'Mozilla/5.0 (Android 10; Mobile; rv:92.0) Gecko/92.0 Firefox/92.0',
    },
    Safari: {
      PC: {
        Mac: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15',
      },
      iOS: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
    },
    Edge: {
      PC: {
        Windows:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36 Edg/93.0.961.38',
        Mac: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36 Edg/93.0.961.38',
      },
      iOS: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1 EdgiOS/46.0.0.1',
      Android:
        'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Mobile Safari/537.36 EdgA/93.0.961.38',
    },
    WeChat: {
      PC: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI WindowsWechat',
      iOS: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16C101 MicroMessenger/7.0.4(0x17000429) NetType/WIFI Language/zh_CN',
      Android:
        'Mozilla/5.0 (Linux; Android 10; SM-G9650 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.149 Mobile Safari/537.36 MMWEBID/7551 MicroMessenger/7.0.15.1680(0x27000F34) Process/toolsmp WeChat/arm32',
    },
    QQBrowser: {
      PC: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36 QQBrowser/10.5.3863.400',
      iOS: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 QQ/8.3.12.617 V1_IPH_SQ_8.3.12_1_APP_A Pixel/750 Core/UIWebView Device/Apple(iPhone 11) NetType/4G QBWebViewType/1',
      Android:
        'Mozilla/5.0 (Linux; Android 11; SM-G9650) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36 QQ/8.5.11.4815',
    },
    BaiduBrowser: {
      PC: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36 BIDUBrowser/7.52.0.4001',
      iOS: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 baiduboxapp/12.8.5.10 (Baidu; P2 14.0)',
      Android:
        'Mozilla/5.0 (Linux; Android 11; SM-G9650) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36 baiduboxapp/12.8.5.10 (Baidu; P2 11.0)',
    },
    UCBrowser: {
      PC: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36 UCBrowser/7.0.185.1002',
      iOS: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 UCBrowser/13.3.2.1293 Mobile AliApp(TUnionSDK/0.1.20.3)',
      Android:
        'Mozilla/5.0 (Linux; Android 11; SM-G9650) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.149 Mobile Safari/537.36 UCBS/13.3.5.1302 Mobile',
    },
  };

  it('UA parse', () => {
    for (const browser in ua) {
      for (const platform in ua[browser]) {
        const val = ua[browser][platform];

        if (typeof val === 'string') {
          Object.values(parseUserAgent(val)).forEach((i) => {
            expect(i).not.toBe('Unknown');
          });
        } else {
          for (const sub in val) {
            Object.values(parseUserAgent(val[sub])).forEach((i) => {
              expect(i).not.toBe('Unknown');
            });
          }
        }
      }
    }
  });
});
