import React from "react";

import { calcTime, convertMoney } from "../../helpers";

import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <p>SÜRE</p>
        <p>{calcTime(time)}</p>
      </div>
      <div className="column">
        <p>BÜTÇE</p>
        <p>{convertMoney(budget)}</p>
      </div>
      <div className="column">
        <p>GELİR</p>
        <p>{convertMoney(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);

export default MovieInfoBar;
