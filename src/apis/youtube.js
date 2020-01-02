const gapi = window.gapi;
const API_KEY = 'AIzaSyCd3cxXww1gU5i51XaSqRxiEYowcCy0oNs';
const REST = 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';

export const playlists = {
  'football': 'PLsYKzSg_1lx68cpc_RG6V2spzESLqy5J1'
};

class Video {
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

const loadClient = () => {
  gapi.client.setApiKey(API_KEY);
  gapi.client.load(REST).then(
    () => console.log('GAPI loaded'),
    err => console.error('GAPI load error:', err)
  );
};

export const initialize = () => {
  gapi.load('client', loadClient);
};

const waitForCondition = (func, timeout) => new Promise((resolve, reject) => {
  const startTime = Date.now();

  const check = () => {
    if (func()) {
      resolve();
    } else if (Date.now() > startTime + timeout) {
      reject('Timed out!');
    } else {
      setTimeout(check, 1000);
    }
  };

  check();
});

export async function getPlaylistItems(playlistId) {
  const params = { part: 'snippet', maxResults: 10, playlistId };

  await waitForCondition(() => gapi.client && gapi.client.youtube, 5000);

  const response = await gapi.client.youtube.playlistItems.list(params);
  const items = response.result.items;
  return items.map(data => new Video(data.snippet));
}
