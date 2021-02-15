import axios from 'axios';
import * as Constants from '../Constants';

export const getQuestions =  async () => await axios.get(Constants.URL+"questions");