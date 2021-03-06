import React, { useState, useEffect } from 'react'

import '../../sass/movie/Movie.scss'
import Nav from '../Nav/Nav'
import Paixu from './Paixu'
import Footer from '../Footer/Footer'
import MovieNav from './MovieNav'
import MovieMid from './MovieMid'
import List from './List'
import axios from '../../utils/http'

// import CinemaList from './CinemaList'
function Movie () {
    const [page, setPage] = useState("nowShowing")//"nowShowing", "upComing", "classic"
    const [listMap, setListMap] = useState([])
    const [movieTypeSelect, setMovieTypeSelect] = useState('')
    const [ageSelect, setAgeSelect] = useState('')
    const [areaSelect, setAreaSelect] = useState('')
    const [timeSort, setTimeSort] = useState('')
    const [scoreSort, setScoreSort] = useState('')


    const typeMap = {
        nowShowing: 0,
        upComing: 1,
        classic: 2
    }
    useEffect(() => {
        axios.get('/movieList', {
            params: {
                type: typeMap[page],
                movieTypeSelect,
                ageSelect,
                areaSelect,
                timeSort,
                scoreSort

            }
        }).then((res) => {
            console.log(res.data)
            if (res.data.code == 1) {
                setListMap(res.data.data)
            } else {
                setListMap([])

            }
        })
    }, [page, movieTypeSelect, ageSelect, areaSelect, timeSort, scoreSort])

    return (
        <div>
            <div className="big" style={{ marginBottom: "140px" }}>
                <Nav />
                <MovieNav setPage={setPage} page={page} />
                <MovieMid ageSelect={ageSelect} setAgeSelect={setAgeSelect} areaSelect={areaSelect} setAreaSelect={setAreaSelect} movieTypeSelect={movieTypeSelect} setMovieTypeSelect={setMovieTypeSelect} />
                <Paixu timeSort={timeSort} setTimeSort={setTimeSort} scoreSort={scoreSort} setScoreSort={setScoreSort} />
                <List page={page} setPage={setPage} listMap={listMap} />
                {/* <Footer /> */}
            </div>

        </div >
    )
}

export default Movie