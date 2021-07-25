import React from 'react'

const infoPost = (props) => {
    return (
        <>
            <div className="flex space-x-3 mt-4">
                <p>{props.tag}</p>
                <p>&#9679;</p>
                <p>{props.date}</p>
            </div>
            <div className="space-y-4">
                <div className="title text-[24px]">
                    <h2>{props.title}</h2>
                </div>
                <div className="description">
                    <p>{props.description}</p> 
                </div>
                <div className="profile flex items-center space-x-4">
                    <img className="w-1/5" src={props.imgProfile}/>
                    <div>
                        <p>{props.name}</p>
                        <p className="text-gray-400 text-[14px]">{props.job}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default infoPost
