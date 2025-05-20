import SerisData from "../API/thapa_series.json";

const Netflix = () => {
  return (
    <>
      <ul>
        {SerisData.map((data) => {
          return (
            <li key={data.id}>
              <div className="movie_card" id="bright">
                <div className="info_section">
                  <div className="movie_header ">
                    <img
                      className="locandina"
                      // src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
                      src={data.img_url}
                    />
                    <h1>{data.name}</h1>
                    <h4>2017, David Ayer</h4>
                    <span className="minutes">117 min</span>
                    <span className="minutes">Rating {data.rating}</span>
                    <p className="type">{data.genre}</p>
                    <p className="type">Cast:{data.cast}</p>
                  </div>
                  <div className="movie_desc ">
                    <p className="text">{data.description}</p>
                  </div>
                  <a href={data.watch_url} target="_blank">
                    <button className="btn bg-red-600 text-white  items-center p-3 mt-50 text-2xl block rounded-2xl">
                      Watch now
                    </button>
                  </a>
                </div>
                <div className="blur_back bright_back"></div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Netflix;
