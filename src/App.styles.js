import styled from 'styled-components';
import heartIcon from './like-button-active.svg';

export const StyledApp = styled.div``;

export const Home = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background: linear-gradient(to top, #1c0522, transparent);
    z-index: 3;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  &.moon {
    mix-blend-mode: screen;
  }

  &.mountains_front {
    z-index: 2;
  }

  p {
    display: inline-block;
    color: #ffffff;
    font-size: 30px;
    z-index: 1;
    transform: translateY(100px);
    transition: 0.5s;
  }
`;

export const Cursor = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 52px;
  height: 52px;
  background-image: url(${heartIcon});
  background-repeat: no-repeat;
  background-position: center;
  z-index: 4;
  pointer-events: none;
`;

export const Button = styled.button`
  min-width: 350px;
  text-align: center;
  font-weight: 800;
  font-size: 25px;
  padding: 50px;
  border-radius: 20px;
  border: none;
  margin-right: 60px;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
  background-image: linear-gradient(to right, #895cf2 0%, #ffabf4 50%, #895cf2 100%);
  transition: 0.5s;

  &:hover {
    background-position: right center;
  }

  &:last-of-type {
    margin: 0;
  }
`;

export const Text = styled.p`
  font-size: 48px;
  color: #a1479e;
  text-align: center;
  
  span {
    font-size: 50px;
    font-weight: 700;
    background: linear-gradient(90deg, #fc466b, #3f5efb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Quiz = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  background-color: #1c0522;
  height: 100vh;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  margin: 0 0 120px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
