export const LESSON_SECTIONS_BY_LANG = {
  ko: [
    {
      id: 'lesson-1',
      label: 'CHAPTER 01',
      title: 'DATA',
      description: '이름을 만드는 GPT 모델을 학습시키기 위해, 많은 이름들을 모았어요. 이 이름들이 실제론 문서에 해당해요.',
      points: [
        '한국어 이름 샘플을 모아 학습 데이터셋을 만들어요.',
        '각 이름은 모델이 읽는 하나의 문서(document)예요.',
        '문서 수가 많을수록 이름 패턴을 더 안정적으로 배워요.',
      ],
      takeaway: '데이터 품질이 좋아질수록 생성되는 이름 품질도 좋아져요.',
      bgClass: 'bg-neo-secondary',
    },
    {
      id: 'lesson-2',
      label: 'CHAPTER 02',
      title: 'TOKENIZATION',
      description:
        '모델이 이름을 만드는 방법을 배우게 하기 위해, 이름을 음운(초성·중성·종성)으로 나누고, 각 음운에 고유한 번호(토큰 ID)를 부여해 모델이 읽을 수 있는 형태로 바꿨어요. 이름의 시작과 끝에는 [BOS]라는 특수한 토큰을 추가해 어디가 시작과 끝인지 알려줘요.',
      points: [
        '좌우 화살표로 예시 이름을 바꿔가며 토큰화를 확인해요.',
        '각 음운 토큰에는 모델이 참조하는 고유 번호(token id)가 매핑돼요.',
        'BOS 토큰은 이름 시퀀스가 시작된다는 것을 알려주는 특수 토큰이에요.',
      ],
      takeaway: '이름을 음운 + 번호 시퀀스로 바꾸면, 모델이 계산 가능한 입력으로 이해할 수 있어요.',
      bgClass: 'bg-neo-muted',
    },
    {
      id: 'lesson-3',
      label: 'CHAPTER 03',
      title: 'EMBEDDING',
      description: '토큰 임베딩과 위치 임베딩을 더해 모델 입력 임베딩을 만듭니다. 어떤 음운이 어느 위치에 놓였는지에 따라 최종 벡터가 달라집니다.',
      points: [
        '각 토큰은 길이 16의 숫자 벡터(토큰 임베딩)로 변환돼요.',
        '현재 위치도 길이 16의 벡터(위치 임베딩)로 표현돼요.',
        '두 벡터를 같은 차원끼리 더한 값이 모델 입력이 돼요.',
      ],
      takeaway: '같은 음운이라도 위치가 바뀌면 입력 임베딩이 달라집니다.',
      bgClass: 'bg-white',
    },
    {
      id: 'lesson-4',
      label: 'CHAPTER 04',
      title: 'ATTENTION',
      description:
        '선택한 예시 이름와 인덱스를 기준으로 Final Embedding(x)에서 Q, K, V를 만들어 Attention Output을 계산하고, 최종적으로 다음 토큰으로 어떤 토큰이 나올 지 확률을 계산합니다.',
      points: [
        'Query 위치를 고르면 해당 위치의 Q를 기준으로 과거 토큰들과의 유사도를 계산해요.',
        'K는 정보의 주소, V는 실제로 가져올 내용을 나타내요.',
        'softmax로 정규화한 가중치로 V를 합치면 최종 Attention Output이 됩니다.',
      ],
      takeaway: 'Attention은 현재 위치가 필요한 과거 정보를 선택적으로 모아오는 연산입니다.',
      bgClass: 'bg-neo-muted',
    },
    {
      id: 'lesson-5',
      label: 'CHAPTER 05',
      title: 'LOSS AND GRADIENT',
      description:
        '각 POS에서 정답 토큰이 나올 확률을 통해 예측과 정답의 차이(손실, loss)를 산출합니다. 각 파라미터(보라색 박스)가 이 손실에 기여하는 정도(gradient)를 역전파(backpropagation)를 통해 계산할 수 있습니다.',
      points: [
        'POS 0부터 마지막 음운 예측 POS까지 next token 확률을 순서대로 확인해요.',
        '각 POS마다 정답 토큰 주변 5개 확률만 세로 리스트로 보여줘요.',
        '아래에서 POS별 token loss와 평균 loss를 함께 확인해요.',
      ],
      takeaway: '학습은 각 POS의 정답 확률을 높이는 방향으로 평균 loss를 줄이는 과정입니다.',
      bgClass: 'bg-white',
    },
    {
      id: 'lesson-6',
      label: 'CHAPTER 06',
      title: 'TRAINING',
      description: '각 파라미터가 손실에 기여하는 정도(gradient)를 활용하여, 모델은 손실을 줄이는 방향으로 반복적으로 파라미터를 조정해나가며 학습합니다.',
      points: [
        'step preset(50/100/500/1000)으로 학습 구간을 선택하고 0부터 재생해요.',
        'pause, reset, 슬라이더로 원하는 step 상태를 직접 확인해요.',
        '선택한 파라미터의 gradient와 업데이트된 16차원 값을 한 번에 비교해요.',
      ],
      takeaway: '표현은 단순한 수식이지만, 실제 값은 Adam 업데이트를 따릅니다.',
      bgClass: 'bg-neo-muted',
    },
    {
      id: 'lesson-7',
      label: 'CHAPTER 07',
      title: 'INFERENCE',
      description:
        '학습된 모델을 이용해 실제로 새로운 이름을 만듭니다. 각 POS에서 얻은 다음 토큰 확률 분포에서 랜덤으로 토큰을 뽑아 음운을 순차적으로 생성합니다.',
      points: [
        '상단 큐에 생성된 이름을 최대 10개까지 저장하고 클릭해 비교해요.',
        'Temperature 슬라이더로 샘플링 분포를 조절해 이름 다양성을 확인해요.',
        '선택한 이름의 POS별 next token probability와 샘플 토큰을 재생해요.',
      ],
      takeaway: '추론은 학습된 확률 분포에서 다음 토큰을 순차적으로 샘플링하는 과정입니다.',
      bgClass: 'bg-neo-secondary',
    },
    {
      id: 'lesson-8',
      label: 'CHAPTER 08',
      title: 'REAL GPT',
      description:
        'microgpt(이 사이트에서 다루고 있는 모델)는 GPT의 알고리즘 뼈대를 보여주는 간소화된 버전이고, real GPT는 같은 원리를 대규모 데이터·하드웨어·후처리 파이프라인으로 확장한 시스템입니다.',
      points: [
        {
          topic: '데이터',
          similarity: '둘 다 다음에 나올 토큰을 예측하는 목적으로 텍스트 분포를 학습하며, 데이터 품질이 모델 품질을 크게 좌우합니다.',
          difference: 'microgpt는 소규모 이름 데이터셋을 다루지만 real GPT는 웹·도서·코드 등 조 단위의 토큰 규모 코퍼스를 중복 제거, 품질 필터링, 도메인 믹싱 후 학습합니다.',
        },
        {
          topic: '토큰화',
          similarity: '둘 다 문자열을 정수 토큰 시퀀스로 변환한 뒤 임베딩으로 바꿉니다.',
          difference: 'microgpt는 문자(음운) 단위 토큰화로 수 십개 정도의 vocabulary를 사용하지만, real GPT는 BPE 계열 subword tokenizer를 사용해 약 10만 개 내외 vocabulary를 사용합니다.',
        },
        {
          topic: '임베딩',
          similarity: '둘 다 token embedding과 position 정보를 결합해 Transformer 입력 표현을 만듭니다.',
          difference: 'microgpt는 저차원 dense embedding 중심이지만 real GPT는 고차원 임베딩, RoPE(회전 위치 인코딩), 정규화/스케일링 전략을 결합해 긴 문맥 안정성을 높입니다.',
        },
        {
          topic: '모델 구조',
          similarity: '둘 다 Attention과 MLP, 잔차 연결이 활용 된 Transformer 블록 구조를 공유합니다.',
          difference: 'microgpt는 수천 파라미터·1개 레이어 수준이고, real GPT는 수천억 파라미터·수백 개 레이어로 확장되며 GQA, gated activation, MoE 같은 최적화 블록이 추가됩니다.',
        },
        {
          topic: '학습 방식',
          similarity: '둘 다 loss를 최소화하도록 역전파와 Adam 계열 optimizer로 파라미터를 업데이트합니다.',
          difference: 'real GPT는 대규모 pretraining 이후 post-training(SFT, RLHF/RLAIF 계열 preference optimization)을 거쳐 지시 수행 능력·응답 품질·안전성 정렬을 강화합니다.',
        },
        {
          topic: '추론',
          similarity: '둘 다 autoregressive decoding으로 다음 토큰을 한 스텝씩 생성합니다.',
          difference: 'real GPT는 대규모 동시 요청을 처리하기 위해 batching, KV cache paging, quantization, speculative decoding, multi-GPU 분산 서빙을 결합한 별도 inference stack이 필요합니다.',
        },
      ],
      bgClass: 'bg-white',
    },
  ],
  en: [
    {
      id: 'lesson-1',
      label: 'CHAPTER 01',
      title: 'DATA',
      description:
        'Щоб навчити GPT модель генерувати імена, ми зібрали багато імен. У цьому контексті кожне ім\'я діє як документ.',
      points: [
        'Ми збираємо приклади імен для побудови навчального набору даних.',
        'Кожне ім\'я - це один документ, прочитаний моделлю.',
        'Більше документів допомагає моделі стабільніше вивчати закономірності імен.',
      ],
      takeaway: 'Зі покращенням якості даних покращується і якість згенерованих імен.',
      bgClass: 'bg-neo-secondary',
    },
    {
      id: 'lesson-2',
      label: 'CHAPTER 02',
      title: 'TOKENIZATION',
      description:
        'Щоб модель вивчила, як формуються імена, кожне ім\'я розділяється на одиниці звуків (початкова, серединна, кінцева), і кожна одиниця відображається на унікальний token ID, щоб модель могла її обробити. Спеціальний [BOS] токен додається на початок і кінець для позначення меж.',
      points: [
        'Використовуйте стрілки вліво/вправо для переключення прикладів імен і перевірки токенізації.',
        'Кожен токен звука відображається на унікальний token id, який використовує модель.',
        'Токен BOS - це спеціальна мітка, яка вказує на межі послідовності.',
      ],
      takeaway: 'Перетворення імен на послідовності звуків + id робить їх придатними для обчислень входами моделі.',
      bgClass: 'bg-neo-muted',
    },
    {
      id: 'lesson-3',
      label: 'CHAPTER 03',
      title: 'EMBEDDING',
      description:
        'Ембедінг входу моделі створюється додаванням ембедінгу токена та позиції. Остаточний вектор змінюється залежно від того, який звук з\'являється в якій позиції.',
      points: [
        'Кожен токен перетворюється на 16-вимірний числовий вектор (token embedding).',
        'Поточна позиція також представлена як 16-вимірний вектор (position embedding).',
        'Вхід моделі - це поелементна сума цих двох векторів.',
      ],
      takeaway: 'Навіть один і той же звук отримує інше Ембедінг входу при зміні позиції.',
      bgClass: 'bg-white',
    },
    {
      id: 'lesson-4',
      label: 'CHAPTER 04',
      title: 'ATTENTION',
      description:
        'З огляду на вибраний приклад імені та індекс, ми обчислюємо Q, K та V з Final Embedding (x), отримуємо Attention Output та нарешті обчислюємо ймовірність кожного можливого наступного токена.',
      points: [
        'Виберіть позицію Query для обчислення подібності порівняно з попередніми токенами.',
        'K представляє адреси інформації, а V представляє фактичний вміст для отримання.',
        'Застосування ваг softmax та комбінування V дає остаточний Attention Output.',
      ],
      takeaway: 'Attention вибірково збирає релевантну інформацію з минулого для поточної позиції.',
      bgClass: 'bg-neo-muted',
    },
    {
      id: 'lesson-5',
      label: 'CHAPTER 05',
      title: 'LOSS AND GRADIENT',
      description:
        'На кожному POS ми порівнюємо передбачення та ймовірність цільового токена для обчислення loss. Потім ми обчислюємо, наскільки кожен параметр сприяє цьому loss через backpropagation (gradient).',
      points: [
        'Перевіряйте ймовірності наступного токена від POS 0 до останнього POS передбачення в порядку.',
        'Для кожного POS у вертикальному списку показано лише п\'ять ймовірностей навколо цільового токена.',
        'Переглядайте token loss та mean loss для кожного POS разом нижче.',
      ],
      takeaway: 'Навчання - це процес зниження mean loss шляхом підвищення ймовірності цільового токена на кожному POS.',
      bgClass: 'bg-white',
    },
    {
      id: 'lesson-6',
      label: 'CHAPTER 06',
      title: 'TRAINING',
      description:
        'Використовуючи внесок gradient кожного параметра до loss, модель вчиться, повторно оновлюючи параметри в напрямку, який зменшує loss.',
      points: [
        'Виберіть діапазон навчання з попередніми встановленнями кроку (50/100/500/1000) та повторіть з кроку 0.',
        'Використовуйте паузу, скидання та керування повзунком для прямої перевірки будь-якого стану кроку.',
        'Порівняйте gradient вибраного параметра та оновлені 16D значення рядом.',
      ],
      takeaway: 'Формула проста, але фактичні значення слідують Adam оновленням.',
      bgClass: 'bg-neo-muted',
    },
    {
      id: 'lesson-7',
      label: 'CHAPTER 07',
      title: 'INFERENCE',
      description:
        'З навченою моделлю ми генеруємо нові імена, беручи вибірки токенів з розподілів ймовірності наступного токена на кожному POS і послідовно будуючи звуки.',
      points: [
        'Збережіть до 10 згенерованих імен у верхній черзі та натисніть, щоб порівняти їх.',
        'Відрегулюйте повзунок Temperature, щоб спостерігати зміни різноманітності в sampling.',
        'Повторіть ймовірності наступного токена та вибрані токени для кожного POS для вибраного імені.',
      ],
      takeaway: 'Inference бере вибірки наступних токенів крок за кроком з вивчених розподілів ймовірності.',
      bgClass: 'bg-neo-secondary',
    },
    {
      id: 'lesson-8',
      label: 'CHAPTER 08',
      title: 'REAL GPT',
      description:
        'Microgpt (модель, розглянута на цьому сайті) - це спрощена версія, яка розкриває алгоритмічний скелет GPT, тоді як real GPT масштабує ті ж принципи з масивними даними, апаратом і конвеєрами постобробки.',
      points: [
        {
          topic: 'Дані',
          similarity: 'Обидва вивчають текстові розподіли для передбачення наступного токена, і якість даних сильно впливає на якість моделі.',
          difference: 'Microgpt використовує невеликий набір даних імен, тоді як real GPT навчається на трильйонному масштабі корпусів з веб/книг/коду після дедублікації, фільтрування якості та змішування доменів.',
        },
        {
          topic: 'Токенізація',
          similarity: 'Обидва перетворюють рядки на послідовності цілих токенів, а потім вкладення.',
          difference: 'Microgpt використовує токенізацію на рівні символу/фонеми з невеликим словником, тоді як real GPT використовує subword tokenizers родини BPE з близько ~100k словником.',
        },
        {
          topic: 'Вкладення',
          similarity: 'Обидва поєднують token embedding та інформацію про позицію у представлення входу трансформатора.',
          difference: 'Microgpt зосереджується на низькомірних щільних вкладеннях, тоді як real GPT поєднує багатовимірні вкладення, RoPE та стратегії нормалізації/масштабування для стабільності довгого контексту.',
        },
        {
          topic: 'Архітектура моделі',
          similarity: 'Обидва мають спільну структуру блоків трансформатора, побудованих з Attention, MLP та залишкових з\'єднань.',
          difference: 'Microgpt - це близько тисяч параметрів і один шар, тоді як real GPT масштабується до сотень мільярдів параметрів і сотень шарів з оптимізаціями, такими як GQA, gated activations та MoE.',
        },
        {
          topic: 'Метод навчання',
          similarity: 'Обидва оновлюють параметри через backpropagation та optimizer сім\'ї Adam для мінімізації loss.',
          difference: 'Real GPT використовує post-training (SFT та preference optimization, такі як RLHF/RLAIF) після великомасштабного pretraining для покращення слідування інструкціям, якості відповідей та вирівнювання безпеки.',
        },
        {
          topic: 'Висновок',
          similarity: 'Обидва генерують токени autoregressively один за одним.',
          difference: 'Real GPT вимагає окремого великомасштабного стека inference, що поєднує batching, KV cache paging, quantization, speculative decoding та мультиGPU розподілене обслуговування.',
        },
      ],
      bgClass: 'bg-white',
    },
  ],
}

const LESSON_SECTION_OVERRIDES_BY_EXAMPLE_LANG = {
  en: {
    ko: {
      'lesson-1': {
        points: [
          '영어 이름 샘플을 모아 학습 데이터셋을 만들어요.',
          '각 이름은 모델이 읽는 하나의 문서(document)예요.',
          '문서 수가 많을수록 이름 패턴을 더 안정적으로 배워요.',
        ],
      },
      'lesson-2': {
        description:
          '모델이 이름을 만드는 방법을 배우게 하기 위해, 이름을 문자 단위로 나누고 각 문자에 고유한 번호(토큰 ID)를 부여해 모델이 읽을 수 있는 형태로 바꿨어요. 이름의 시작과 끝에는 [BOS]라는 특수한 토큰을 추가해 어디가 시작과 끝인지 알려줘요.',
        points: [
          '좌우 화살표로 예시 이름을 바꿔가며 토큰화를 확인해요.',
          '각 문자 토큰에는 모델이 참조하는 고유 번호(token id)가 매핑돼요.',
          'BOS 토큰은 이름 시퀀스가 시작된다는 것을 알려주는 특수 토큰이에요.',
        ],
        takeaway: '이름을 문자 + 번호 시퀀스로 바꾸면, 모델이 계산 가능한 입력으로 이해할 수 있어요.',
      },
      'lesson-3': {
        description: '토큰 임베딩과 위치 임베딩을 더해 모델 입력 임베딩을 만듭니다. 어떤 문자가 어느 위치에 놓였는지에 따라 최종 벡터가 달라집니다.',
        takeaway: '같은 문자라도 위치가 바뀌면 입력 임베딩이 달라집니다.',
      },
      'lesson-5': {
        points: [
          'POS 0부터 마지막 토큰 예측 POS까지 next token 확률을 순서대로 확인해요.',
          '각 POS마다 정답 토큰 주변 5개 확률만 세로 리스트로 보여줘요.',
          '아래에서 POS별 token loss와 평균 loss를 함께 확인해요.',
        ],
      },
      'lesson-7': {
        description:
          '학습된 모델을 이용해 실제로 새로운 이름을 만듭니다. 각 POS에서 얻은 다음 토큰 확률 분포에서 랜덤으로 토큰을 뽑아 문자를 순차적으로 생성합니다.',
      },
      'lesson-8': {
        points: [
          {
            topic: '데이터',
            similarity: '둘 다 다음에 나올 토큰을 예측하는 목적으로 텍스트 분포를 학습하며, 데이터 품질이 모델 품질을 크게 좌우합니다.',
            difference: 'microgpt는 소규모 이름 데이터셋을 다루지만 real GPT는 웹·도서·코드 등 조 단위의 토큰 규모 코퍼스를 중복 제거, 품질 필터링, 도메인 믹싱 후 학습합니다.',
          },
          {
            topic: '토큰화',
            similarity: '둘 다 문자열을 정수 토큰 시퀀스로 변환한 뒤 임베딩으로 바꿉니다.',
            difference: 'microgpt는 문자 단위 토큰화로 수 십개 정도의 vocabulary를 사용하지만, real GPT는 BPE 계열 subword tokenizer를 사용해 약 10만 개 내외 vocabulary를 사용합니다.',
          },
          {
            topic: '임베딩',
            similarity: '둘 다 token embedding과 position 정보를 결합해 Transformer 입력 표현을 만듭니다.',
            difference: 'microgpt는 저차원 dense embedding 중심이지만 real GPT는 고차원 임베딩, RoPE(회전 위치 인코딩), 정규화/스케일링 전략을 결합해 긴 문맥 안정성을 높입니다.',
          },
          {
            topic: '모델 구조',
            similarity: '둘 다 Attention과 MLP, 잔차 연결이 활용 된 Transformer 블록 구조를 공유합니다.',
            difference: 'microgpt는 수천 파라미터·1개 레이어 수준이고, real GPT는 수천억 파라미터·수백 개 레이어로 확장되며 GQA, gated activation, MoE 같은 최적화 블록이 추가됩니다.',
          },
          {
            topic: '학습 방식',
            similarity: '둘 다 loss를 최소화하도록 역전파와 Adam 계열 optimizer로 파라미터를 업데이트합니다.',
            difference: 'real GPT는 대규모 pretraining 이후 post-training(SFT, RLHF/RLAIF 계열 preference optimization)을 거쳐 지시 수행 능력·응답 품질·안전성 정렬을 강화합니다.',
          },
          {
            topic: '추론',
            similarity: '둘 다 autoregressive decoding으로 다음 토큰을 한 스텝씩 생성합니다.',
            difference: 'real GPT는 대규모 동시 요청을 처리하기 위해 batching, KV cache paging, quantization, speculative decoding, multi-GPU 분산 서빙을 결합한 별도 inference stack이 필요합니다.',
          },
        ],
      },
    },
    en: {
      'lesson-1': {
        points: [
          'Ми збираємо приклади українських імен для побудови навчального набору даних.',
          'Кожне ім\'я - це один документ, прочитаний моделлю.',
          'Більше документів допомагає моделі стабільніше вивчати закономірності імен.',
        ],
      },
      'lesson-2': {
        description:
          'Щоб модель вивчила, як формуються імена, кожне ім\'я розділяється на одиниці символів, і кожен символ відображається на унікальний token ID, щоб модель могла його обробити. Спеціальний [BOS] токен додається на початок і кінець для позначення меж.',
        points: [
          'Використовуйте стрілки вліво/вправо для переключення прикладів імен і перевірки токенізації.',
          'Кожен токен символу відображається на унікальний token id, який використовує модель.',
          'Токен BOS - це спеціальна мітка, яка вказує на межи послідовності.',
        ],
        takeaway: 'Перетворення імен на послідовності символів + id робить їх придатними для обчислень входами моделі.',
      },
      'lesson-3': {
        description:
          'Вкладення входу моделі створюється додаванням вкладення токена та вкладення позиції. Остаточний вектор змінюється залежно від того, який символ з\'являється в якій позиції.',
        takeaway: 'Навіть один і той же символ отримує інше вкладення входу при зміні позиції.',
      },
      'lesson-7': {
        description:
          'З навченою моделлю ми генеруємо нові імена, беручи вибірки токенів з розподілів ймовірності наступного токена на кожному POS і будуючи імена символ за символом.',
      },
      'lesson-8': {
        points: [
          {
            topic: 'Дані',
            similarity: 'Обидва вивчають текстові розподіли для передбачення наступного токена, і якість даних сильно впливає на якість моделі.',
            difference: 'Microgpt використовує невеликий набір даних імен, тоді як real GPT навчається на трильйонному масштабі корпусів з веб/книг/коду після дедублікації, фільтрування якості та змішування доменів.',
          },
          {
            topic: 'Токенізація',
            similarity: 'Обидва перетворюють рядки на послідовності цілих токенів, а потім вкладення.',
            difference: 'Microgpt використовує токенізацію на рівні символів з невеликим словником, тоді як real GPT використовує subword tokenizers родини BPE з близько ~100k словником.',
          },
          {
            topic: 'Вкладення',
            similarity: 'Обидва поєднують token embedding та інформацію про позицію у представлення входу трансформатора.',
            difference: 'Microgpt зосереджується на низькомірних щільних вкладеннях, тоді як real GPT поєднує багатовимірні вкладення, RoPE та стратегії нормалізації/масштабування для стабільності довгого контексту.',
          },
          {
            topic: 'Архітектура моделі',
            similarity: 'Обидва мають спільну структуру блоків трансформатора, побудованих з Attention, MLP та залишкових з\'єднань.',
            difference: 'Microgpt - це близько тисяч параметрів і один шар, тоді як real GPT масштабується до сотень мільярдів параметрів і сотень шарів з оптимізаціями, такими як GQA, gated activations та MoE.',
          },
          {
            topic: 'Метод навчання',
            similarity: 'Обидва оновлюють параметри через backpropagation та optimizer сім\'ї Adam для мінімізації loss.',
            difference: 'Real GPT використовує post-training (SFT та preference optimization, такі як RLHF/RLAIF) після великомасштабного pretraining для покращення слідування інструкціям, якості відповідей та вирівнювання безпеки.',
          },
          {
            topic: 'Висновок',
            similarity: 'Обидва генерують токени autoregressively один за одним.',
            difference: 'Real GPT вимагає окремого великомасштабного стека inference, що поєднує batching, KV cache paging, quantization, speculative decoding та мультиGPU розподілене обслуговування.',
          },
        ],
      },
    },
  },
}

export const getLessonSectionsForLanguage = (descriptionLanguage = 'en', exampleLanguage = 'ko') => {
  const normalizedDescriptionLanguage = descriptionLanguage === 'ko' ? 'ko' : 'en'
  const normalizedExampleLanguage = exampleLanguage === 'en' ? 'en' : 'ko'
  const baseSections = LESSON_SECTIONS_BY_LANG[normalizedDescriptionLanguage] ?? LESSON_SECTIONS_BY_LANG.en
  const overrides = LESSON_SECTION_OVERRIDES_BY_EXAMPLE_LANG[normalizedExampleLanguage]?.[normalizedDescriptionLanguage]

  if (!overrides) {
    return baseSections
  }

  return baseSections.map((section) => {
    const sectionOverride = overrides[section.id]
    if (!sectionOverride) {
      return section
    }
    return {
      ...section,
      ...sectionOverride,
    }
  })
}
