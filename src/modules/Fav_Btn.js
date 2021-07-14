import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
const Fav_Btn = ({ item, favouriteData, index, callBack }) => {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        debugger
        if (favouriteData === undefined) return
        const find = favouriteData.findIndex(x => x.id === item.id)
        if (find !== -1) {
            setToggle(true)
            return;
        }
        setToggle(false)
    }, [favouriteData])

    return <TouchableOpacity
        onPress={() => callBack(item)}
        key={index}
        style={{ marginLeft: 20, marginTop: 10 }} >
        <AntDesign name={toggle ? 'heart' : 'hearto'} size={30} />
    </TouchableOpacity>
}

export default Fav_Btn
