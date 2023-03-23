import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDSPhimAction } from '../../store/actions/QuanLyPhimActionThunk'
import { quanLyPhimSelector } from '../../store/selector/selector'
import Movie from '../Movie/Movie'
import _ from 'lodash'


const MoviesShow = () => {
  const dispatch=useDispatch()
const {arrFilm}=useSelector(quanLyPhimSelector)
// console.log({arrFilm})
useEffect(()=>{
  dispatch(layDSPhimAction())
},[])
  return (
    <div>
      <h1 className="text-center  font-medium text-xl p-5  border-b-2 border-rose-600 ">PHIM ĐANG CHIẾU</h1>
        <Movie arrFilm={_.filter(arrFilm,['dangChieu',true])} duration={3500}/>
			<h3 className="text-center  font-medium text-xl p-5  border-b-2 border-rose-600">PHIM SẮP CHIẾU</h3>
        <Movie arrFilm={_.filter(arrFilm,['sapChieu',true])} duration={2500}/>
    </div>
  )
}

export default MoviesShow