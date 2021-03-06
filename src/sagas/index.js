import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"
  const url = `${proxyUrl}https://api.twitter.com/2/users?ids=4780951812&user.fields=profile_image_url,public_metrics,id,location,url,created_at,description,entities`;
  const urltrump=`${proxyUrl}https://api.twitter.com/2/tweets/search/recent?query=trump&max_results=10&tweet.fields=text,author_id,public_metrics,created_at,entities,source,withheld`
  const json = yield fetch(url,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization':'Bearer AAAAAAAAAAAAAAAAAAAAABxINQEAAAAAv3N1Fx2yrKlLAXrjOs7KjMTPvps%3DptWUkOJLkRED08FkeE4mlMcJzguzWMOX6OtCfD6vmlDlCY5jir'
    }
  })
    .then(response => response.json());

  yield put({ type: "NEWS_RECEIVED", json: json.data || [{ error: json.message }] });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
