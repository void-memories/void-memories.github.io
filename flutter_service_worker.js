'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "68f00f92b0602f556103118d7a5462cd",
"/": "68f00f92b0602f556103118d7a5462cd",
"main.dart.js": "2c461860e4ecd0b6d42febf3af6ec857",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f2b7f4b0bac6bb9b2f622ce4ce6d3727",
".git/config": "ed5cf83bb87af1cf265c54dcb72ac86d",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/0c/f0353d88d464b576e98edce439c105e5431765": "6f218cb76c789faf36e3e0e66732b03d",
".git/objects/66/36ea1bfc5273c15595f93e0e168d9faef526a1": "4d1cc5b3da0b946293302b986a3b6890",
".git/objects/3e/a0ba8914a7230afb1db30decc99e14dbd0b9e3": "584f794121a33bdc1edd61035da780bf",
".git/objects/3b/8622f67bffda70fc2d7f6ff2f2ad6f3078fd08": "731b64a59569a859ccc7057722b737a4",
".git/objects/6f/8c09dcdc9c25b86917bab71910c8bbb5d51d06": "2b1ecdf97b715461c526dd37bd7e6947",
".git/objects/04/765e9a4fad8b828f70bc827daea1dc43f6cf47": "cc79493a473283dabcc31cd35bb61268",
".git/objects/6a/6165aaea6ca0131bf23a7f5a102257638b31a8": "c924063ed80050b94e9b28c78ad2cdd6",
".git/objects/34/a0a135c4c72fcec89b7db4195f3d47550f1968": "92ef6ce47fa994be4db2959a34f0f037",
".git/objects/05/641d64c92be4d6aea8f62dfc0d4fd75e638b0c": "c06259dc1ebd936e973a2339e1960200",
".git/objects/9d/21f51417b4039a92453de72e6abb94b6dbba5a": "d7edb5c120d5e6504469560fe89a7130",
".git/objects/b2/731f6ecbaac2c9062efa390b6b9e79f5144df3": "e6a9f0c8e7ac06d003e7ce0514367311",
".git/objects/d9/978de9fdb64d774cbf676d42bfde2f4e688617": "4d81d31753537a446ddaf1c06ce8e84c",
".git/objects/ad/fa6a48bd1bf9aac4d536919f61019ef7476541": "ae5bf4db1b1f05513d18f6449398ff26",
".git/objects/d7/c19d65827613a220473a62ffca6233264c7a2c": "33c10be962e41ce1c18a6d37bd05068e",
".git/objects/d0/e1a89d063ff3f760c6a1826badedde5a050c90": "60cc938ceebc7e4f4a73ba0d2b6291d4",
".git/objects/be/b2c5cb707570d67aa851205a1dc6a857edd12b": "c208fdf000b9278002c06a2277788acd",
".git/objects/d1/c26d347fcff011a0dda45ac1acca5d5a2228fd": "1cf5b62d529c8d9e1cfcf2d40b4de343",
".git/objects/d6/c4d27dc7f27e7a1ad0ea1641ffbbdc7da79470": "d9d865631bf12d02b59533b327da41e3",
".git/objects/d6/a08bb74aa3cdb16e0bd997361cf2796ee6196e": "0454b58ff01954ab061b28de111e593d",
".git/objects/bc/726133c08b48c243480f681d76637232318c6d": "910ddd7d681c1f6f4af914b2b113100d",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ca/5da36c3bd09e6ee6250c835924405eef7952ac": "096406de14f3218e0606cbebda0b4b2a",
".git/objects/ca/8c942f484392334a12068f6d2d3d509ec69de9": "9aad75e4097a9db753a95bc64ce07b0d",
".git/objects/fe/9552ae33f46b1546867c66e15bf198432e682d": "7ad98b6451b0a4be08281dfd7ffeaba1",
".git/objects/ec/20f84aafa053e99698769883be650340b94b60": "71d58fe23a9aaaca0fdd5887089c2768",
".git/objects/20/dc111b092be4a8a9b3865800227304a667ce4b": "565a6bee0fcdcb180859661844bdec40",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/11148b568168a3a6fbf031a5de35a5a35e2622": "267b5fbb0bdd441837f19131720a9d71",
".git/objects/20/735e2a6da0a9dd1d0f19798ea362dde04523f2": "1d94039bdb30c5f827f5f0d298210163",
".git/objects/7d/54d663f5ef201a9a45d384de2daa4193242ab1": "cbdaf70a24b8067399d562063cc306e6",
".git/objects/80/d8e82e078f9a3cb1fe3fdc9614cd0b8845174a": "0dc7855df5b230e871e22a2fa0fcaf2a",
".git/objects/17/edcbc85e01c6f82750c3ef9ad38f7611bf0d6a": "8770708ae0ea47a9655f65a8f29e7d90",
".git/objects/17/f976b20028c636040f604c0d3be71c5c520010": "4c1469e0bac62f02fc83098406f3555e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/70548237f087e6d192d47a581f3e951e58184e": "08f43ffb703a4e51beee0816a108f5e0",
".git/objects/7e/fc1fdc87bf2f033df043faea13b45200578a1a": "495ce66d911609d949e637abe3510f51",
".git/objects/19/5544d270f59fdcfc92df7bd566fcab668da50a": "9795d12231f3cbcdfe00e6eed7a30c2e",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/72/90450f46d9f656099ffaa2bcec22b5e4b896b3": "50d80c273a85ab8463e74b9982419b2b",
".git/objects/44/1d3baab4f3bfc1ce251942e420988fac12a8f4": "ac3a2ba50af07d40313ad29d8023a3b1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/ddac61d91ae69fcebcf4630679d2cf1c5629a8": "70297d59901f89118bc0bfaae3308832",
".git/objects/07/6d441f498d2976cf5152b9322a4d7a0be95e2f": "fbe0f5d65c8d634df93bcd082d10c22e",
".git/objects/6e/26de76d46d7e4c28d19acb691cc8a4b41b4287": "9ce195e87d87f63da6937cdbbc944c14",
".git/objects/36/eb34f1d997e884089d7a575e6c00fa764bca02": "9c66000c93df5cfd286d454c198fb062",
".git/objects/96/9c1dc4c206e4cbb914ac7e0b28b418329a07cf": "1d2b730c7bf4b87cdcc46b695e208251",
".git/objects/54/fd9d68a2dc12af355b89330eb3e277a8f26960": "672032e1cdd6f98e8b0a264d86534071",
".git/objects/3f/4d5b06f760df04b7fbd49405f42a2621b46fce": "09952f9a18147c8f7a58f6d3a34002dc",
".git/objects/37/aba2d13bdf8a8a24a3a3c11c52a9349d0eee88": "1464f02db908d2a21867871530d676ed",
".git/objects/52/55a955066f600ab8426870b1a3798f0289d387": "6ce38fdf4609c9a5f9d79fe29b42d627",
".git/objects/55/7d7d7b2ac93a731e55726b02f88f4ff9f61494": "2b3c0371b662bce6ef7a5810f557d5a9",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/dd/f5abaffcfd7bb0a7b725c71ea1072085d03c1d": "4d80645f89ba6cfea7939414873a29c1",
".git/objects/d2/fd59b89c59b68300477bcda01a59095deca6e5": "9ca705672986253e411e53eed60304ac",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b341685f6a2fb77a4d9394d3f1129515b1ca03": "f2979237c06b873218f691a123ffcf71",
".git/objects/b9/2e469fb3ff14c3c8a950d3141996a101bffd28": "691fcb3fafc35e1d952b0d5da0b2ee50",
".git/objects/ff/2edbe4fe7ea8ec667e0d44e8983b627eb112c9": "31e0d23fdfdc0614f34720eb77519437",
".git/objects/c5/90da7ac1ced9987d01a6913f0097e50d55c754": "9e911d7d14eb28c90f629e2d237a3647",
".git/objects/c2/c61ed54975e973db6e32b468db84fedd896e57": "808d54a7576a4ec431a5edb08c10e5eb",
".git/objects/cb/35fcda1fdc113590134ec590b365a14f7217fb": "6103a666f0c2dcef96ae1d92ff8a3bbc",
".git/objects/79/fdf41a4625b327ae2a01f15b1d0ccca9673057": "aaeaa285a91d52716e865327a446d9b6",
".git/objects/2d/81e36016b36a7bff99377ae23849909b48f0d1": "652b0ac8d59fd6192542dca0c4a1bdc1",
".git/objects/8d/abf493bf51a7b164ce324d447ebce90d5ea11f": "5d5c1bb551c438324d284ef016ff05b6",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/12/74fa69d0f0de6ef235c08d4ed113b2ce40330d": "4c1621e840488edbd03c8c80f3a9be9f",
".git/objects/85/4d3de0665224f54e1aaf1339307546e1f35f66": "e5f3c3ab78a335f361124b0fe6be5c04",
".git/objects/49/51401aa32e345715f8efac956ce5f1234d1344": "46059e648fc2b4784e403d2362d61dc7",
".git/objects/2b/62bbc2b56d4857a3d234cf714cec4502027bdf": "6531d0b6daeeaebf1f1548e1b2495847",
".git/objects/78/9af078b00490824e164dad81c2cfa09d30c953": "c59c9c3ffdc7fac44ddc6390a538b401",
".git/objects/14/088160a8f7c9288c817336ea7079033f9e9c4b": "362de23a1d2e03803a0fe97c8306e642",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "58d96d7e7a43b5237720e1089b6df416",
".git/logs/refs/heads/master": "58d96d7e7a43b5237720e1089b6df416",
".git/logs/refs/remotes/origin/master": "d5efbe0de0488d8a3f74fe88cea00e82",
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
".git/refs/heads/master": "2cf58983b6ca5f8dc94d663940cbc616",
".git/refs/remotes/origin/master": "2cf58983b6ca5f8dc94d663940cbc616",
".git/index": "d00369efa0244b8e41be29744d25057e",
".git/COMMIT_EDITMSG": "43f7dd6e26164aee67b25f867ab886f4",
"assets/dreamlndr.png": "60d31ea736b097c218fc8dc76e7afa0a",
"assets/kat.png": "267d14517375d345ec441d4cce15a8cf",
"assets/AssetManifest.json": "d666b7848ed5fb20a76194330f266b3f",
"assets/NOTICES": "3dd20f4d3dd839c978fc2da0a1f45f17",
"assets/guitarlord.png": "c28fc714e20e89078a6b37543828900d",
"assets/FontManifest.json": "aad083cd225b36eec9888241fefed0bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/crikarchive.png": "b858fa23367a89e3e91e214374b5268c",
"assets/autumn.png": "43002ac84162fd6c3101d6403fe2f650",
"assets/blockchain.png": "957d60b7ae3637222198102923ca5a3c",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/fonts/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"assets/fonts/Poppins-SemiBold.ttf": "342ba3d8ac29ac8c38d7cef8efbf2dc9",
"assets/assets/dreamlndr.png": "60d31ea736b097c218fc8dc76e7afa0a",
"assets/assets/kat.png": "267d14517375d345ec441d4cce15a8cf",
"assets/assets/guitarlord.png": "c28fc714e20e89078a6b37543828900d",
"assets/assets/crikarchive.png": "b858fa23367a89e3e91e214374b5268c",
"assets/assets/autumn.png": "43002ac84162fd6c3101d6403fe2f650",
"assets/assets/blockchain.png": "957d60b7ae3637222198102923ca5a3c",
"assets/assets/itrepeats.png": "8bf4ab59d571cb90487e5f2db48784f4",
"assets/assets/2.png": "895ec7be8d372ce33594726d22095ca8",
"assets/assets/prism.png": "cff81931d0aba10565497e48ebc375ce",
"assets/assets/1.png": "75caaf521f98eefa1a53a2526848642a",
"assets/itrepeats.png": "8bf4ab59d571cb90487e5f2db48784f4",
"assets/2.png": "895ec7be8d372ce33594726d22095ca8",
"assets/prism.png": "cff81931d0aba10565497e48ebc375ce",
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
