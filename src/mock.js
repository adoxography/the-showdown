const highlightData = [
  {
    title: 'Big Football Game',
    image: 'https://images.unsplash.com/photo-1488474739786-757973c2dff6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80'
  },
  {
    title: 'Other Football Game',
    image: 'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=991&q=80'
  },
  {
    title: 'Football Playoffs',
    image: 'https://images.unsplash.com/photo-1450121982620-84a745035fa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1672&q=80'
  },
  {
    title: 'Basketball Playoffs',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  },
  {
    title: 'Women\'s Volleyball',
    image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  },
  {
    title: 'Men\'s Boxing',
    image: 'https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  },
];

export const highlights = Array(30).fill().map(() => ({
  ...highlightData[Math.floor(Math.random() * highlightData.length)],
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dolorum voluptatem facilis placeat deserunt obcaecati cupiditate eos. Laudantium consequatur doloremque magni eligendi, optio aliquam dicta porro possimus expedita! Quod, quos.'
}));
