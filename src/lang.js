import React,{useState} from 'react'
import PropTypes from 'prop-types'

const Lang = ({language}) => {
    const [locale, setlocale] = useState('en')
    const handelChange = (e) =>{
        setlocale(e.target.value);
    }
    return (
        <div>
            <select onChange={handelChange} defaultValue={locale}>
                {language.map((x)=>(
                    <option key={x} value={x.LangValue}>{x.LangTitle}</option>
                ))}
            </select>

        </div>
    )
}

Lang.propTypes = {
language:PropTypes.array,
message:PropTypes.array
}
Lang.defaultProps = {
    language:[
        {
            LangValue:"en",
            LangTitle:"English"
        },
        {
            LangValue:"hi",
            LangTitle:"Hindi"
        },
    ],
    message:[
        {
            en:{
                Title:"Hello"
            },
            hi:{
                Title:"नमस्ते"
            }
            
        }
    ]
}

export default Lang

