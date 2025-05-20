import SerisData from "../API/thapa_series.json";

const Netflix = () => {
  return (
    <>
      <ul>
        <div class="movie_card" id="bright">
          <div class="info_section">
            <div class="movie_header">
              <img
                class="locandina"
                // src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
                src={SerisData[0].img_url}
              />
              <h1>{SerisData[0].name}</h1>
              <h4>2017, David Ayer</h4>
              <span class="minutes">117 min</span>
              <span class="minutes">Rating {SerisData[0].rating}</span>
              <p class="type">{SerisData[0].genre}</p>
            </div>
            <div class="movie_desc">
              <p class="text">{SerisData[0].description}</p>
            </div>
            <div class="movie_social">
              <button
                type="button "
                className="inline-flex items-center border rounded-md border-transparent bg-red"
              >
                Watch now
              </button>
            </div>
          </div>
          <div class="blur_back bright_back"></div>
        </div>
      </ul>
    </>
  );
};

export default Netflix;
