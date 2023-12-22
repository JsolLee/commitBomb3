const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const News = require('./news.model');

const app = express();
const PORT = 3001;

app.use(cors());

// MongoDB 연결 설정
mongoose.connect('mongodb://localhost:27017/commit', {
  // useNewUrlParser와 useUnifiedTopology 옵션 제거
  // 이 옵션들은 더 이상 필요하지 않습니다.
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// MongoDB 연결 확인
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected successfully');
});

app.get('/api/news', async (req, res) => {
  try {
    // 뉴스 API에서 데이터 가져오기
    const response = await axios.get(
      'https://openapi.naver.com/v1/search/news.json',
      {
        params: {
          query: 'IT/과학',
          display: 10,
        },
        headers: {
          'X-Naver-Client-Id': '0TRiZCMMVbVobZth54Uv',
          'X-Naver-Client-Secret': 'XlXBhIA_Ey',
        },
      }
    );

    // 가공된 데이터를 MongoDB에 삽입
    const insertPromises = response.data.items.map(async (item) => {
      const imageUrl = item.image || 'defaultImage.jpg';

      // newsItem 생성 이전에 변수를 정의
      const newsItemData = {
        title: item.title,
        description: item.description,
        publisher: item.publisher || 'Unknown Publisher',
        imageUrl: imageUrl,
        link: item.link,
      };

      const newsItem = new News(newsItemData);

      // MongoDB에 데이터를 저장하고 로그 출력
      await newsItem.save();
      console.log('Saving to MongoDB:', newsItemData);

      return newsItemData; // 저장된 데이터 반환
    });

    // 저장된 데이터를 배열로 모아 응답
    const insertedData = await Promise.all(insertPromises);
    res.json(insertedData);
  } catch (error) {
    console.error('뉴스 데이터를 불러오거나 MongoDB에 삽입하는 중 에러 발생:', error);
    res.status(500).json({ error: '서버 에러' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
