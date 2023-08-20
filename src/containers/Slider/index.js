import { useEffect, useState, React } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0); 
  // const byDateDesc = data?.focus.sort((evtA, evtB) =>
  //   new Date(evtA.date) < new Date(evtB.date) ? -1 : 1  
  // );
  const [byDateDesc, setByDateDesc] = useState([])
  useEffect(() => {
    if(data){
      const tmpByDateDesc = data.focus.sort((evtA, evtB) =>
        new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
      );
      setByDateDesc(tmpByDateDesc)
    }
  }, [data])
  const nextCard = () => {
    setTimeout(
      // () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
      () => setIndex(index + 1 < byDateDesc.length ? index + 1 : 0),
      5000
    );
  };
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div key={event.title}>
          {/* React.Fragment key={event.id} */}
          <div
            key={event.title}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer" key={Math.random(1, 1000000)}>
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={Math.random(1, 1000000)}
                  type="radio"
                  name="radio-button"
                  defaultChecked={index === radioIdx}
                  // checked={index === radioIdx}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
