import React, {FC} from 'react';
import {Button} from "@mui/material";

type PropsCardType = {
    title: string
    userName: string
    date: string

}

export const Card: FC<PropsCardType> = ({title, date, userName}) => {

    // const cards = [
    //     {id: 1, title: 'question_1', userName: 'Person_1', date: "010101"},
    //     {id: 2, title: 'question_2', userName: 'Person_2', date: "020202"},
    //     {id: 3, title: 'question_3', userName: 'Person_3', date: "030101"},
    //     {id: 4, title: 'question_4', userName: 'Person_4', date: "040101"},
    //     {id: 5, title: 'question_4', userName: 'Person_5', date: "050101"},
    //     {id: 6, title: 'question_6', userName: 'Person_6', date: "060101"},
    //     {id: 7, title: 'question_7', userName: 'Person_7', date: "070101"},
    //     {id: 8, title: 'question_8', userName: 'Person_8', date: "080101"},
    // ]
    return (
        <div className='border mb-5 mr-5 '>
            <h3>NodeJs</h3>
            <p>{title}</p>
            <p><span>By </span>{userName}</p>
            <Button variant="contained" href="#contained-buttons">
                Link
            </Button>
            <p>Created:{date}</p>
        </div>)


};
