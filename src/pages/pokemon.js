import React, {useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import {getpokemonlist} from '../actions/getpokemon';

import {
    FacebookShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon
} from 'react-share';

const Button = styled.button`
    padding: 15px;
    margin: 20px;
    background: transparent;
    border-color: rgb(209, 37, 0);
    color: #D12500;
    font-size: 1em;
    border-radius: 20px;
    box-shadow: 0px 1px 6px grey;
    &:hover,
    &:active {
        cursor: pointer;
        background: #D12500;
        color: white;
        box-shadow: 1px 4px 7px grey;
    }
`;
const Par = styled.p`
text-shadow: 2px 2px 4px #D12500;
`;
const Container = styled.div`
    margin: 20px;
`;

const Pokemon = () => {
    const { slug } = useParams();
    const pokemons = useSelector(state => state.counter);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getpokemonlist(pokemons[slug]))
    },[pokemons[slug]]);
    const pokemonList = useSelector(state => state.pokemonListReducer);
    const historyProps = useHistory();
    console.log('historyProps', historyProps)

    const handleBack = () => {
        if (historyProps.length > 2) {
            historyProps.goBack();
        } else {
            historyProps.push("/");
        }
    }
    const handleToTop = () => {
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }
    return (
        <>
            <Button onClick={handleBack}>BACK</Button>
            <div>
                <FacebookShareButton
                    url="www.fb.com"
                    quote="FB link">
                    <Button><FacebookIcon size={32} round={true} /></Button>
                </FacebookShareButton>

                <TwitterShareButton
                    url="www.twitter.com"
                    title="Twitter Link">
                    <Button><TwitterIcon size={32} round={true} /></Button>
                </TwitterShareButton>
            </div>
            <Container>
                {/* <p>Name: {pokemonList.name}</p>
                <p>Height: {pokemonList.height}</p>
                <p>Weight: {pokemonList.weight}</p> */}
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Container>
            <Button onClick={handleToTop}>TOP</Button>
            <Par>NEW PAGE</Par>
        </>
    );
}

export default Pokemon;