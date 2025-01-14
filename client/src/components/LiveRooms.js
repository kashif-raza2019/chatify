import React from 'react'
import { useSelector } from 'react-redux'
import Container from './styled/Container.styled'
import H3 from './styled/h3.styled'
import LiveRoomsListStyled from './styled/LiveRoomsList.styled'
import NoRoomMessageStyled from './styled/NoRoomMessage.styled';
import LiveRoom from './LiveRoom'

const LiveRooms = ({}) => {
    const liveRooms = useSelector(state => state.room.rooms);

    return (
        <>
            <H3 color="#fff">Or choose from live rooms</H3>
            <Container borderRadius="25px" backgroundColor="#fff" minHeight="100px">
                <LiveRoomsListStyled>
                    {liveRooms.length == 0 && <NoRoomMessageStyled>* Currently, there are no live rooms</NoRoomMessageStyled>}
                    {liveRooms.map(room => <LiveRoom key={room} room={room}/>)}
                </LiveRoomsListStyled>
            </Container>
        </>
    )
}

export default LiveRooms
