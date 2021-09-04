import React from 'react';
import { Search } from '../Common/Search';

/*
 * TODO
 * 1. Main
 *   1) Layout (Menu 클릭시 컨테이너 변경)
 *   2) Contatiner
 * 2. Auth
 *   1) Layout (뒤로가기 클릭시 메인으로 이동)
 *   2) Contatiner
 *   3) 연동 로그인
 */

export const Home = () => {
  return (
    <div>
      <Search />
      홈컨테이너
    </div>
  );
};
