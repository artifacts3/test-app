'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "59702d3e35dc9fbce7e8ef123bdb4c39",
"version.json": "6348b981be99eddeae8856302e4c83a6",
"index.html": "8c4760dc186ff90a86640c690aa43896",
"/": "8c4760dc186ff90a86640c690aa43896",
"main.dart.js": "c331f7708279a75f0a8a83c6b6ab8747",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c1789762f7591065e5026a584db8e85e",
".git/ORIG_HEAD": "638d582a33120c5598780ac522e03e59",
".git/config": "102b9d33c08ad4a7f6b92a4473cc8c79",
".git/objects/0d/965564572fd46c37af1711e566f5d8b44faa22": "897e33c75014c9d8457433509686f3fc",
".git/objects/92/7e256996f81e63e3a7dc2c5e7c3be2c51d8724": "1246ddb948610bcb93d4c1d0f359ccff",
".git/objects/66/03513a3550844eadc871a45106e51e9ae05745": "30a45663fa201cfe97bb9952a300bc7e",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/5bc8b47c4652857d3a70b16115eaf57d6edd08": "7fd73a455bec9b177657fa987290dce4",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9c/7d345b8dd9de6ed60db43615bb294337bf4109": "907f86291060dcf8d75bf010b683c9cb",
".git/objects/a4/c459d7f74dd0676f1bde574dabda192907e37e": "32ce63bed11bca60ca6e9892574e82e1",
".git/objects/a4/b4c44b2d9608c152263b0ecd4c6de2da9376a3": "a42213dd7a3b4d69b6ef72248ce54ffa",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/b4/e1df803ac6499c17ff7b995105b5bf6f85e1cd": "ef6d9b86026eebe7340120fd4273cedd",
".git/objects/a2/9afbef806ca66f3308a6d71efd8523c927cb21": "6a3a1d7e59d28bc4bb007d41782c8e50",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/bd/38163162173210bcbd4045fc6a53a29a4a78e6": "8b9c045937e413174fba6d1264e9e2ca",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/0be517e5defed56fa0bdb4fbb23ba3c2094d01": "77c8cad9109e9d2dfaf7fe812c7e1ce2",
".git/objects/f4/6151fb54545b5e807380250d7b46c3a120d8d9": "7a39efd124138305c6d5a9225278cf87",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/9c2154057dd50880bb50f03c59abd42028d15d": "0fa883ea1d02908d21f6756dd546d5a4",
".git/objects/ee/65f42818e4e2f32e8e5bdf65ca2968fc9fb3b6": "e6d714d201cf1b37e9e5a29911d36cfc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/4fdeef544b666744bf2aed428114e02aab426a": "89d00f066cdf0cd671d205ba73d579c2",
".git/objects/fe/f333318f1ea8ac9bf19ae0e3ee98f30424636a": "fc2bd4d651f89aae1d9515e8680031e2",
".git/objects/fe/17e23d367298bb30ee8afff62aa2c10ed0e095": "872a38ecf2559b865426d25ec17118ab",
".git/objects/fb/3c4bba2cb39ec7a860749243fde6088727f745": "bab0f2b1924bd71ec3caf62ec2bb8821",
".git/objects/c6/80d0aaf8d5ef131ab68a0478332975654346cd": "2a9463640594b65211b453e1cf392eb2",
".git/objects/c6/e50213afa20c0809140b2fbe925de008cff34b": "9c43d53d185b4939389e20b89c656b2d",
".git/objects/ec/4983ec68f99571fe750712fadc2e04468b48eb": "39da21a6796343d0a057ec244bccbbc0",
".git/objects/42/98ff1c96f5d894e53b5353f1262f9cd6cd5f72": "5affaa0b2594cd75357c802674260858",
".git/objects/45/35978b2d36d9da834839fb64af2a07df6aec6a": "f39f918046fbf8fbf16644d3a4cf40e3",
".git/objects/73/49b10d2f6f57a76144c81bd5b784b691a95bc1": "41091bced18c14aaf99e019b819948dc",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/94dbfef0611eac6f06927badde014e9c204a81": "566241d950d0da8bd8ee161e69089a30",
".git/objects/75/3a96b31ae6d88daadd3b1fbdc27104f322f9fb": "db1c2f6c5c5a4969f12e00c5f23dbb30",
".git/objects/72/89b9da9ea7f98ebcab3ab0a6c961651fa619f1": "0c4a61bf85c06e773bebc0b9c84bb50a",
".git/objects/72/8ed427a2ab95cdebc822433340b6241c05b2c1": "1af7e2ff3370c77e5f69182aabecfa62",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/9a/8d52f592012708c77f67e6fe4c81102001da03": "ecf421a439d3813d4edd469e2a8daf1c",
".git/objects/31/a2bdcd05473ef5ee88567bed231295d7ee887d": "db86aedba423d7e61afd6b2b5a8cbc57",
".git/objects/91/bf31fbbc75455ef3ce2ef55a55407cafeedb44": "daff7672cdbb006482ae6f1396999257",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/53/f896cfb6c908d290d561e50242f0884b067238": "0ef0700c396755fc4d294a3057e53275",
".git/objects/5b/d528d8ef8a9befdc7ccce6b7d1c07e1e44e15d": "a02463e4abd4715f0531394c42bdb47d",
".git/objects/37/19b8e487fe7cef2f2f7fb43198f6dc6fb0c3f4": "a55fb1d27889840ac125cd96039c1ad0",
".git/objects/37/0c07758c589a2f4b4f53c42517ce877f9d7d32": "18c7ce1ab54988103f85c2c33a880acd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b6/7cbb599026f7254b3d2b5ac60aabaddd648d49": "8362a03602ca51ae85e14396b42e8747",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/11a7b3c6ff0baf468ed3ff42605682738b5b88": "cda15a13def9d6cb0b0fc68cf5d97ad9",
".git/objects/a1/a425371fc3bba4dd74a0e0aca99c91b77b9093": "3836a51db0b7f109c8aad87ed1a3c482",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c4/e9741a6ae7096312e61adebaa54a267142d4b2": "28f56d054ca1f2ce03a959dbe47df1cd",
".git/objects/e8/21720d6dcc4c6dc44cd400ece085afc31e5efe": "2c8549b5ea0170f88bcb2c022aa8265e",
".git/objects/c5/cf217b2ef07a7c195c5f023f33bc9ac2f4f4b7": "69ca0b059ee3bc635decc5d91932a4b5",
".git/objects/f6/d42725af73de8c53d117c1de66eeea316732ec": "538ed5a556ce645c84657f0125d91399",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/e1ccd12083ab71b0dce898950b8d04e69dcb87": "29d8e33b4e97d963217decb4e2843f06",
".git/objects/46/a6d6141890ba1278d46ede5852472e90caf73e": "ac0abf6dad35d4d9a1ba73203404fe2c",
".git/objects/79/cf3a71e440d0bf5b0ab16e94febe4bb960b190": "0e2d37655898d5e0e7975717ee63b60e",
".git/objects/1b/4e5dd23f012b413e4725445bf13bb4f1adc56d": "091cede8d9fc82c96c7082c22553e0ec",
".git/objects/1b/aa000ec6bf7100ed31ccb9417d201764fb555b": "1ef8fad0ab02472ed4dc215ad100dd51",
".git/objects/70/fcd98fbddf61999023895c50ae04fc9b718536": "22d808a1cbcdaabbf0d0dd5f3144bffc",
".git/objects/70/f58393f18428c80d91e577830dcff1942373c0": "c13a74e76983c29c85cdfe9d700e3b07",
".git/objects/1e/f1e07dadd6394f0469e689db8948c2173b6e70": "e6f1e0aa36a2f7993ad68fdeb5f31e8d",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8d/9a17dcfa460f54728a6845bb4f9899b4d3ec6c": "60fddf31c52a4ebfabbe1391b46ff68a",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/7f/31746e9cef3ba5f9c2a03929b4472f24ba0d7a": "461cc05dc20579f23d6dfbf38e347a62",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3789ecf2148418a1b3f9a2b27ddafa85",
".git/logs/refs/heads/test-reactive": "dafa9d550558835f9a374e3ddbd174ed",
".git/logs/refs/heads/gh-pages": "c08c1ef8c911bbb1007bde3133f3b334",
".git/logs/refs/remotes/origin/gh-pages": "10f5ea67a91bccede9830106615a316f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/test-reactive": "ed8478c52695572421b1d84a9242ca12",
".git/refs/heads/gh-pages": "ed8478c52695572421b1d84a9242ca12",
".git/refs/remotes/origin/gh-pages": "ed8478c52695572421b1d84a9242ca12",
".git/index": "c3467928222566df10a681de95bd0eab",
".git/COMMIT_EDITMSG": "ffc70d528b1d78486d8f9dd36215cd29",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "bdd943e76fd740e680db5a34388f6012",
"assets/NOTICES": "57d0aba303bcfe1db33d32e806fa27b9",
"assets/FontManifest.json": "608f880f190b5ec82ae3721427ed6fae",
"assets/AssetManifest.bin.json": "937a0b36f9e24107d5ddcc32141d2f44",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a8c14dba81baa11a615346c7002c3dc5",
"assets/fonts/MaterialIcons-Regular.otf": "c77f9a992e2c55724a2a9569b0970bca",
"assets/assets/downflip.gif": "052dbad644ac256064f1589d437ebabb",
"assets/assets/startrek_mousepointer.png": "0ae42b5cc82773a9c5de51dc55af7f78",
"assets/assets/fonts/testapp-Regular-SVG.otf": "7fd28788812da1894932daaf6a418797",
"assets/assets/fonts/font.ttf": "17132c9addb754dbedc9382f220fd204",
"assets/assets/fonts/Hello%2520Kitty.otf": "ff527d8e9864c4028029eac3749430ad",
"assets/assets/fonts/Unnamed-Regular-SVG.otf": "55da9d410251123543250ac51a26a6d3",
"assets/assets/cat_cursor.png": "ca61bc3befd5072be58e06a9f80f25e0",
"assets/assets/bgm.gif": "450f21cb9598fb4722f7937b60cf5c90",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
