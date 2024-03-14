/* eslint-disable no-new */
import './styles.css';
import { petList } from './components/petlist';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Card } from './components/cards';
import { Pet } from './components/addpet';

new Header('header');
new Footer('footer');
new Pet('.input');
petList.map((item) => new Card('.cards', item));
