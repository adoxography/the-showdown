let gapi;
const API_KEY = 'AIzaSyCd3cxXww1gU5i51XaSqRxiEYowcCy0oNs';
const REST = 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';

export class Video {
  constructor(data) {
    const {
      description,
      title,
      resourceId,
      thumbnails
    } = data;

    const id = resourceId.videoId;

    this.id = id;
    this.title = title;
    this.description = description;
    this.thumbnail = thumbnails.medium.url;
    this.url = `https://www.youtube.com/watch?v=${id}`;
  }
}

const ensureApiLoaded = () => new Promise((resolve, reject) => {
  if (gapi) {
    return resolve();
  }

  const script = document.createElement('script');
  script.src = 'https://apis.google.com/js/api.js';

  window.gapi_onload = () => {
    gapi = window.gapi;
    gapi.load('client', () => {
      gapi.client.setApiKey(API_KEY);
      gapi.client.load(REST).then(resolve, reject);
    });
  };

  document.body.appendChild(script);
});

export async function getPlaylistItems(playlistId) {
  await ensureApiLoaded();
  const params = { part: 'snippet', maxResults: 10, playlistId };

  const response = await gapi.client.youtube.playlistItems.list(params);
  const items = response.result.items;
  return items.map(data => new Video(data.snippet));
}
