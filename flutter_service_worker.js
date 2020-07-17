'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "68f00f92b0602f556103118d7a5462cd",
"/": "68f00f92b0602f556103118d7a5462cd",
"main.dart.js": "3738fc861ba8077370355a01b3babaa9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f2b7f4b0bac6bb9b2f622ce4ce6d3727",
".git/config": "ed5cf83bb87af1cf265c54dcb72ac86d",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/3b/8622f67bffda70fc2d7f6ff2f2ad6f3078fd08": "731b64a59569a859ccc7057722b737a4",
".git/objects/b2/731f6ecbaac2c9062efa390b6b9e79f5144df3": "e6a9f0c8e7ac06d003e7ce0514367311",
".git/objects/d9/978de9fdb64d774cbf676d42bfde2f4e688617": "4d81d31753537a446ddaf1c06ce8e84c",
".git/objects/be/b2c5cb707570d67aa851205a1dc6a857edd12b": "c208fdf000b9278002c06a2277788acd",
".git/objects/d6/c4d27dc7f27e7a1ad0ea1641ffbbdc7da79470": "d9d865631bf12d02b59533b327da41e3",
".git/objects/bc/726133c08b48c243480f681d76637232318c6d": "910ddd7d681c1f6f4af914b2b113100d",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ca/8c942f484392334a12068f6d2d3d509ec69de9": "9aad75e4097a9db753a95bc64ce07b0d",
".git/objects/fe/9552ae33f46b1546867c66e15bf198432e682d": "7ad98b6451b0a4be08281dfd7ffeaba1",
".git/objects/ec/20f84aafa053e99698769883be650340b94b60": "71d58fe23a9aaaca0fdd5887089c2768",
".git/objects/20/dc111b092be4a8a9b3865800227304a667ce4b": "565a6bee0fcdcb180859661844bdec40",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7d/54d663f5ef201a9a45d384de2daa4193242ab1": "cbdaf70a24b8067399d562063cc306e6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/44/1d3baab4f3bfc1ce251942e420988fac12a8f4": "ac3a2ba50af07d40313ad29d8023a3b1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/6d441f498d2976cf5152b9322a4d7a0be95e2f": "fbe0f5d65c8d634df93bcd082d10c22e",
".git/objects/6e/26de76d46d7e4c28d19acb691cc8a4b41b4287": "9ce195e87d87f63da6937cdbbc944c14",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/d2/fd59b89c59b68300477bcda01a59095deca6e5": "9ca705672986253e411e53eed60304ac",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c5/90da7ac1ced9987d01a6913f0097e50d55c754": "9e911d7d14eb28c90f629e2d237a3647",
".git/objects/cb/35fcda1fdc113590134ec590b365a14f7217fb": "6103a666f0c2dcef96ae1d92ff8a3bbc",
".git/objects/79/fdf41a4625b327ae2a01f15b1d0ccca9673057": "aaeaa285a91d52716e865327a446d9b6",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/12/74fa69d0f0de6ef235c08d4ed113b2ce40330d": "4c1621e840488edbd03c8c80f3a9be9f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "0bd11ffbfbdaa431eadb9a60ca1f54c0",
".git/logs/refs/heads/master": "0bd11ffbfbdaa431eadb9a60ca1f54c0",
".git/logs/refs/remotes/origin/master": "e5a5944c9d0ca058c17c43b3a4cdcd13",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "e5a06e9f25de760b6e57c8ed27955943",
".git/refs/remotes/origin/master": "e5a06e9f25de760b6e57c8ed27955943",
".git/index": "bf3e875edbdca307b51a392bce5e9292",
".git/COMMIT_EDITMSG": "717e019d45475044797a1c3c267e34e1",
"assets/AssetManifest.json": "988bc11505787e880b663bc390cb9fe8",
"assets/NOTICES": "d43704761c2bc3ab55a9841eb0707dc7",
"assets/FontManifest.json": "aad083cd225b36eec9888241fefed0bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/fonts/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"assets/fonts/Poppins-SemiBold.ttf": "342ba3d8ac29ac8c38d7cef8efbf2dc9",
"assets/assets/2.png": "895ec7be8d372ce33594726d22095ca8",
"assets/assets/1.png": "75caaf521f98eefa1a53a2526848642a",
"assets/2.png": "895ec7be8d372ce33594726d22095ca8",
"assets/1.png": "75caaf521f98eefa1a53a2526848642a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
