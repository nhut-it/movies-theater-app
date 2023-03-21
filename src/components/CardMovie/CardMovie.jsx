import React from 'react'
import { useDispatch } from 'react-redux'
import { layThongTinPhimAction } from '../../store/actions/QuanLyPhimActionThunk'

const CardMovie = ({film}) => {

  const dispatch=useDispatch()
  const handleSetMovieDetail=()=>{
      dispatch(layThongTinPhimAction(film.maPhim))
  }
  return (
    <div
			className="movie mt-8 mb-14 mx-auto w-[200px] h-[300px]"
			onClick={() => {
				handleSetMovieDetail(film.maPhim);
			}}>
			<div className=" w-full h-full shadow-[0px_0px_18px_9px_rgba(158,158,158,0.15)] hover:scale-110 transition ease-linear  ">
				<div
					className="w-full h-full bg-cover bg-center rounded-md"
					style={{ backgroundImage: `url(${film.hinhAnh})` }}></div>
			</div>
		</div>
  )
}

export default CardMovie