export let method = [
  {
    name: "VKWebAppInit",
    description: "Инициализировать VK Bridge.",
    params: [],
  },
  {
    name: "VKWebAppAddToFavorites",
    description: "Добавить приложение в избранное.",
    params: [],
  },
  {
    name: "VKWebAppAddToHomeScreen",
    description: " Добавить приложение на главный экран устройства.",
    params: [],
  },
  {
    name: "VKWebAppAddToHomeScreenInfo",
    description: "Получить информацию о шорткате.",
    params: [],
  },
  {
    name: "VKWebAppAllowNotifications",
    description: "Запросить разрешение на отправку уведомлений.",
    params: [],
  },
  {
    name: "VKWebAppClose",
    description: "Закрыть приложение.",
    params: [
      {
        param: "status",
        type: "string",
        description:
          "статус закрытия приложения, передаваемый в родительское приложение. Возможные значения:\n" +
          "•\n" +
          "failed;\n" +
          "•\n" +
          "success.",
      },
      {
        param: "payload",
        type: "object",
        description: "данные, передаваемые в родительское приложение.",
      },
    ],
  },
  {
    name: "VKWebAppCopyText",
    description: "Копировать текст в буфер обмена.",
    params: [
      {
        param: "text",
        type: "string",
        description: "Cтрока, которую необходимо поместить в буфер обмена.",
      },
    ],
  },
  {
    name: "VKWebAppDenyNotifications",
    description: "Отключить уведомления.",
    params: [],
  },
  {
    name: "VKWebAppDownloadFile",
    description: "Скачать файл.",
    params: [
      {
        param: "url",
        type: "string",
        description: "Cсылка на файл, который необходимо скачать",
      },
      {
        param: "filename",
        type: "string",
        description: "Название файла.",
      },
    ],
  },
  {
    name: "VKWebAppGetClientVersion",
    description: "Получить номер версии официального приложения ВКонтакте.",
    params: [],
  },
  {
    name: "VKWebAppGetConfig",
    description: "Получить конфигурацию приложения.",
    params: [],
  },
  {
    name: "VKWebAppGetLaunchParams",
    description: "Получить параметры запуска.",
    params: [],
  },
  {
    name: "VKWebAppOpenApp",
    description: "Открыть приложение.",
    params: [
      {
        param: "app_id",
        type: "integer",
        description: "Идентификатор приложения, которое должно быть открыто.",
      },
      {
        param: "location",
        type: "string",
        description: "Хеш, строка после # в URL вида vk.com/app123456#.",
      },
    ],
  },
  {
    name: "VKWebAppOpenCodeReader",
    description: "Считать QR - код.",
    params: [],
  },
  {
    name: " VKWebAppOpenWallPost",
    description: "Открыть запись со стены в слое.",
    params: [
      {
        param: "owner_id",
        type: "integer",
        description:
          "Идентификатор сообщества (отрицательное число) или пользователя (положительное число), на стене которого опубликована запись.",
      },
      {
        param: "post_id",
        type: "integer",
        description: "Идентификатор записи на стене (положительное число).",
      },
    ],
  },
  {
    name: "VKWebAppSendToClient",
    description: "Отправить установочное уведомление на устройство.",
    params: [
      {
        param: "fragment",
        type: "string",
        description:
          "Часть URL после #: vk.com/appXXXX#fragment (hash в уведомлении).",
      },
    ],
  },
  {
    name: "VKWebAppShare",
    description: "Поделиться ссылкой.",
    params: [
      {
        param: "link",
        type: "string",
        description:
          "Ссылка, которой необходимо поделиться (по умолчанию — текущая ссылка вида http://vk.com/app123#hash).",
      },
    ],
  },
  {
    name: "VKWebAppShowImages",
    description: "Открыть нативный экран для просмотра изображений.",
    params: [
      {
        param: "images",
        type: "string[]",
        description: "Массив строк, содержащих URL изображений.",
      },
      {
        param: "start_index",
        type: "integer",
        description:
          "Индекс элемента массива images, с которого нужно начать отображение (неотрицательное целое число).",
      },
    ],
  },
  {
    name: "VKWebAppShowWallPostBox",
    description: "Опубликовать запись на стене.",
    params: [],
  },
  {
    name: "VKWebAppCreateHash",
    description: "Получить хеш.",
    params: [
      {
        param: "payload",
        type: "string",
        description:
          "Любая строка, которую приложение хочет использовать для создания хеша.",
      },
    ],
  },
  {
    name: "VKWebAppGetGrantedPermissions",
    description: "Получить список разрешений.",
    params: [],
  },
  {
    name: "VKWebAppCallAPIMethod",
    description: "Вызвать метод API ВКонтакте.",
    params: [
      {
        param: "method",
        type: "string",
        description: "Название метода API.",
      },
      {
        param: "params",
        type: "object",
        description:
          "Параметры метода в виде JSON, включая ключ доступа access_token и v — версию запроса.",
      },
      {
        param: "request_id",
        type: "string",
        description:
          "Произвольная строка, которая вернётся вместе с результатом запроса. Используйте request_id для отслеживания уникальности запросов.",
      },
    ],
  },
  {
    name: "VKWebAppGetAuthToken",
    description: "Получить права доступа у пользователя.",
    params: [
      {
        param: "app_id",
        type: "integer",
        description: "Идентификатор приложения.",
      },
      {
        param: "scope",
        type: "string",
        description:
          "Список прав доступа(ссылка) через запятую. Для получения токена без дополнительных прав передайте в параметре пустую строку.",
      },
    ],
  },
  {
    name: "VKWebAppGetEmail",
    description: "Получить адрес электронной почты.",
    params: [],
  },
  {
    name: "VKWebAppGetFriends",
    description: "Показать список друзей пользователя.",
    params: [
      {
        param: "multi",
        type: "bool",
        description:
          "Доступные значения: бр • false — выбор одного друга из списка (значение по умолчанию) бр • true — выбор нескольких друзей из списка.",
      },
    ],
  },
  {
    name: "VKWebAppGetGeodata",
    description: "Получить данные о текущем местоположении пользователя.",
    params: [],
  },
  {
    name: "VKWebAppGetPersonalCard",
    description: "Вызвать карточку контактов.",
    params: [
      {
        param: "type",
        type: "bool",
        description:
          "Массив строк. бр Возможные значения: • phone —  номер телефона • email — почтовый адрес • address — адрес пользователя.",
      },
    ],
  },
  {
    name: "VKWebAppGetPhoneNumber",
    description: "Получить номер телефона пользователя.",
    params: [],
  },
  {
    name: "VKWebAppGetUserInfo",
    description: "Получить данные о профиле пользователя.",
    params: [],
  },
  {
    name: "VKWebAppOpenContacts",
    description: "Показать контакты из телефонной книги.",
    params: [],
  },
  {
    name: "VKWebAppAddToCommunity",
    description: "Добавить приложение в сообщество.",
    params: [],
  },
  {
    name: "VKWebAppAllowMessagesFromGroup",
    description:
      "Получить разрешение на отправку сообщений от имени сообщества.",
    params: [
      {
        param: "group_id",
        type: "integer",
        description: "Идентификатор сообщества.",
      },
      {
        param: "key",
        type: "string",
        description:
          "Произвольная строка. Этот параметр можно использовать для идентификации пользователя. Его значение будет возвращено в событии message_allow Callback API. (ссылка)",
      },
    ],
  },
  {
    name: "VKWebAppGetCommunityToken",
    description: "Получить права доступа.",
    params: [
      {
        param: "app_id",
        type: "integer",
        description: "Идентификатор приложения.",
      },
      {
        param: "group_id",
        type: "integer",
        description: "Идентификатор сообщества.",
      },
      {
        param: "scope",
        type: "string",
        description:
          "Список прав доступа (ссылка), перечисленных через запятую.",
      },
    ],
  },
  {
    name: "VKWebAppGetGroupInfo",
    description: "Получить информацию о сообществе.",
    params: [
      {
        param: "group_id",
        type: "integer",
        description: "Идентификатор сообщества.",
      },
    ],
  },
  {
    name: "VKWebAppJoinGroup",
    description: "Предложить пользователю вступить в сообщество.",
    params: [
      {
        param: "group_id",
        type: "integer",
        description: "Идентификатор сообщества.",
      },
    ],
  },
  {
    name: "VKWebAppLeaveGroup",
    description: "Предложить пользователю выйти из сообщества.",
    params: [
      {
        param: "group_id",
        type: "integer",
        description: "Идентификатор сообщества.",
      },
    ],
  },
  {
    name: "VKWebAppSendPayload",
    description: "Отправить событие в сообщество.",
    params: [
      {
        param: "group_id",
        type: "integer",
        description: "Идентификатор сообщества.",
      },
      {
        param: "payload",
        type: "JSON",
        description: "Полезные данные.",
      },
    ],
  },
  {
    name: "VKWebAppShowCommunityWidgetPreviewBox",
    description: "Показать виджет сообщества перед публикацией.",
    params: [
      {
        param: "group_id",
        type: "integer",
        description: "Идентификатор сообщества.",
      },
      {
        param: "type",
        type: "string",
        description: "Тип виджета.",
      },
      {
        param: "code",
        type: "string",
        description:
          "Код виджета. Аналог параметра code в методе execute. бр Параметры всех поддерживаемых типов виджетов подробно описаны в разделе Список объектов. (ссылка)",
      },
    ],
  },
  {
    name: "VKWebAppShowOrderBox",
    description: "Открыть окно покупки товара.",
    params: [
      {
        param: "type",
        type: "string",
        description: "Всегда item.",
      },
      {
        param: "item",
        type: "string",
        description:
          "Название виртуальной ценности. Будет передано в уведомлении на получение информации о виртуальной ценности.",
      },
    ],
  },
  {
    name: "VKWebAppOpenPayForm",
    description: "Показать платёжное окно VK Pay.",
    params: [
      {
        param: "app_id",
        type: "integer",
        description: "Идентификатор приложения.",
      },
      {
        param: "action",
        type: "string",
        description:
          "Тип перевода внутри VK Pay.  Возможные значения:\n" +
          "pay-to-service — перевод сервису, доступен только для юридических лиц, подключённых через форму для юридических лиц. Документация с расширенным набором параметров;\n" +
          "pay-to-user — перевод пользователю фиксированной суммы;\n" +
          "pay-to-group — перевод сообществу фиксированной суммы. Деньги будут переведены на баланс получателя, указанного в управлении сообществом;\n" +
          "transfer-to-group— перевод сообществу произвольной суммы;\n" +
          "transfer-to-user  — перевод пользователю произвольной суммы.",
      },
      {
        param: "params",
        type: "object",
        description:
          "Параметры платёжной формы VK Pay. Формат и параметры зависят от типа перевода.",
      },
    ],
  },
  {
    name: "VKWebAppShowStoryBox",
    description: "Открыть редактор историй.",
    params: [
      {
        param: "background_type",
        type: "string",
        description: "Тип истории.",
      },
      {
        param: "url",
        type: "string",
        description:
          "Ссылка на изображение или видео (нужно указать прямую ссылку на MP4).",
      },
      {
        param: "blob",
        type: "string",
        description:
          "Base64-строка с BLOB (поддерживается только для image). Перед строкой необходимо добавить следующий префикс: data:image/png;base64,<blob-base64> или data:image/jpeg;base64,<blob-base64> в зависимости от типа изображения.",
      },
      {
        param: "locked",
        type: "boolean",
        description: "Можно ли перемещать фотографию.",
      },
      {
        param: "attachment",
        type: "attachment",
        description: "Описание объекта, присоединённого к истории. (ссылка)",
      },
      {
        param: "stickers",
        type: "sticker_container []",
        description: "Массив объектов sticker_container. (ссылка)",
      },
    ],
  },
  {
    name: "VKWebAppSubscribeStoryApp",
    description: "Подписать пользователя на обновления истории.",
    params: [
      {
        param: "story_owner_id",
        type: "integer",
        description: "Идентификатор владельца истории.",
      },
      {
        param: "story_id",
        type: "integer",
        description: "Идентификатор истории.",
      },
      {
        param: "sticker_id",
        type: "integer",
        description: "Идентификатор стикера, на который можно нажать..",
      },
      {
        param: "access_key",
        type: "string",
        description: "access_key ",
      },
    ],
  },
  {
    name: " VKWebAppCheckNativeAds",
    description: "Проверить наличие рекламы, доступной для показа.",
    params: [
      {
        param: "ad_format",
        type: "string",
        description: "Тип рекламы. Возможные значения: reward, interstitial.",
      },
      {
        param: "use_waterfall",
        type: "boolean",
        description:
          "Только для ad_format = reward. Использовать ли механизм показа interstitial рекламы в случае отсутствия rewarded video.",
      },
    ],
  },
  {
    name: "VKWebAppShowNativeAds",
    description: "Показать рекламу.",
    params: [
      {
        param: "ad_format",
        type: "string",
        description:
          "Формат рекламы: reward — видео с наградой за просмотр (до 30 секунд), interstitial — межэкранная реклама (видео или статичная картинка до 5 секунд).",
      },
      {
        param: "use_waterfall",
        type: "boolean",
        description:
          "Только для ad_format = reward. Использовать ли механизм показа interstitial рекламы в случае отсутствия rewarded video.",
      },
    ],
  },
  {
    name: "VKWebAppConversionHit",
    description: "Отслеживать конверсионные действия пользователей.",
    params: [
      {
        param: "pixel_code",
        type: "string",
        description:
          "Код пикселя. Например: VK-Boo-427253-dUuM. Код пикселя можно найти в рекламном кабинете. (ссылка)",
      },
      {
        param: "conversion_event",
        type: "string",
        description:
          "Конверсионное действие, которое необходимо отслеживать. Например, чтобы отслеживать добавление товара в корзину, значение conversion_event должно быть равно add_to_cart, если покупку товара, значение conversion_event должно быть равно purchase. Список всех возможных значений описан в документации рекламного кабинета. (ссылка)",
      },
      {
        param: "conversion_value",
        type: "float",
        description:
          "Стоимость (ценность) конверсионного события (если есть). Например, если пользователь купил товар за 3500 рублей, значение conversion_event должно быть равно purchase, а значение conversion_value должно быть равно 3500.",
      },
    ],
  },
  {
    name: "VKWebAppRetargetingPixel",
    description: "Добавить пользователя в аудиторию ретаргетинга.",
    params: [
      {
        param: "pixel_code",
        type: "string",
        description: "Код пикселя. Например: VK-RTRG-447253-dUuM.",
      },
      {
        param: "event",
        type: "string",
        description: "Идентификатор события, правило пикселя.",
      },
      {
        param: "target_group_id",
        type: "integer",
        description:
          "Идентификатор группы ретаргетинга, в которую нужно добавить текущего пользователя.",
      },
      {
        param: "price_list_id",
        type: "integer",
        description:
          "Идентификатор прайс-листа. Используется для динамического ретаргетинга продуктов.",
      },
      {
        param: "products_event",
        type: "string",
        description:
          "Тип продуктового события. Используется для динамического ретаргетинга продуктов.",
      },
      {
        param: "products_params ",
        type: "string",
        description:
          "Параметры товара. Используется для динамического ретаргетинга продуктов.",
      },
    ],
  },
  {
    name: "VKWebAppResizeWindow",
    description: "Изменить размер окна приложения.",
    params: [
      {
        param: "width",
        type: "integer",
        description:
          "Ширина окна. Может принимать значения от 630px до 1000px.",
      },
      {
        param: "height",
        type: "integer",
        description:
          "Высота окна. Может принимать значения от 500px до 8050px.",
      },
    ],
  },
  {
    name: "VKWebAppScroll",
    description: "Прокрутить окно приложения.",
    params: [
      {
        param: "top",
        type: "integer",
        description:
          "Смещение прокрутки относительно нулевой координаты окна. Например, чтобы прокрутить окно на самый верх страницы, необходимо передать значение 0.",
      },
      {
        param: "speed",
        type: "integer",
        description: "Скорость анимации в миллисекундах. По умолчанию равна 0.",
      },
    ],
  },
  {
    name: "VKWebAppSetLocation",
    description: "Задать значение хеша в адресной строке.",
    params: [
      {
        param: "location",
        type: "string",
        description:
          "Новое значение хеша. Символ «#» в параметре указывать не надо.",
      },
    ],
  },
  {
    name: "VKWebAppSetSwipeSettings",
    description: "Включить свайп, как в браузере.",
    params: [
      {
        param: "history",
        type: "boolean",
        description:
          "Флаг для настройки работы браузера со свайпом для iOS-приложения.",
      },
    ],
  },
  {
    name: "VKWebAppSetViewSettings",
    description: "Настроить вид статус-и экшен-бара.",
    params: [
      {
        param: "status_bar_style",
        type: "string",
        description: "Тема для иконок статус-бара: light, dark.",
      },
      {
        param: "action_bar_color",
        type: "string",
        description:
          "Цвет экшен-бара: hex-код (например, #00ffff), none – прозрачный. Параметр работает только на Android.",
      },
      {
        param: "navigation_bar_color",
        type: "string",
        description:
          "Цвет навигационного бара: hex-код (например, #00ffff). Параметр работает только на Android.",
      },
    ],
  },
  {
    name: "VKWebAppStorageGet",
    description: "Получить значение ключа.",
    params: [
      {
        param: "keys",
        type: "string[]",
        description: "Названия ключей [a-zA-Z0-9], переданные массивом строк.",
      },
    ],
  },
  {
    name: "VKWebAppStorageGetKeys",
    description: "Получить названия всех переменных.",
    params: [
      {
        param: "count",
        type: "integer",
        description:
          "Количество названий переменных, информацию о которых необходимо получить.",
      },
      {
        param: "offset",
        type: "integer",
        description:
          "Смещение, необходимое для выборки определённого подмножества названий переменных.",
      },
    ],
  },
  {
    name: "VKWebAppStorageSet",
    description: "Задать значение переменной.",
    params: [
      {
        param: "key",
        type: "string",
        description:
          "Название ключа, [a-zA-Z0-9]. Максимальная длина — 100 символов.",
      },
      {
        param: "value",
        type: "string",
        description:
          "Значение переменной, сохраняются только первые 4096 байт.",
      },
    ],
  },
  {
    name: "VKWebAppTapticImpactOccurred",
    description: "Вызвать вибрацию при столкновении.",
    params: [
      {
        param: "style",
        type: "string",
        description: "Сила вибрации. Возможные варианты: light, medium, heavy.",
      },
    ],
  },
  {
    name: "VKWebAppTapticNotificationOccurred",
    description: "Вызвать вибрацию после выполнения действия.",
    params: [
      {
        param: "type",
        type: "string",
        description:
          "Тип уведомления. Доступные значения: error, success, warning.",
      },
    ],
  },
  {
    name: "VKWebAppTapticSelectionChanged",
    description: "Вызвать вибрацию при изменении выбора.",
    params: [],
  },
  {
    name: "VKWebAppFlashGetInfo",
    description: "Получить информацию о фонарике.",
    params: [],
  },
  {
    name: "VKWebAppFlashSetLevel",
    description: "Задать уровень яркости фонарика.",
    params: [
      {
        param: "level",
        type: "integer",
        description: "Уровень яркости фонарика от 0 до 1.",
      },
    ],
  },
  {
    name: "VKWebAppAccelerometerStart",
    description: "Получать данные акселерометра.",
    params: [
      {
        param: "refresh_rate",
        type: "integer",
        description:
          "Период обновления данных акселерометра в миллисекундах. Минимальное значение — 20 мс, максимальное — 1000 мс, значение по умолчанию — 1000 мс. (Android)",
      },
    ],
  },
  {
    name: "VKWebAppAccelerometerStop",
    description: "Не получать данные акселерометра.",
    params: [],
  },
  {
    name: "VKWebAppDeviceMotionStart",
    description: "Получать данные о вращении устройства.",
    params: [
      {
        param: "refresh_rate",
        type: "integer",
        description:
          "Период обновления данных акселерометра в миллисекундах. Минимальное значение — 20 мс, максимальное — 1000 мс, значение по умолчанию — 1000 мс. (Android)",
      },
    ],
  },
  {
    name: "VKWebAppDeviceMotionStop",
    description: "Не получать данные о вращении устройства.",
    params: [],
  },
  {
    name: "VKWebAppGyroscopeStart",
    description: "Получать данные гироскопа.",
    params: [
      {
        param: "refresh_rate",
        type: "integer",
        description:
          "Период обновления данных акселерометра в миллисекундах. Минимальное значение — 20 мс, максимальное — 1000 мс, значение по умолчанию — 1000 мс. (Android)",
      },
    ],
  },
  {
    name: "VKWebAppGyroscopeStop",
    description: "Не получать данные гироскопа.",
    params: [],
  },
  {
    name: "VKWebAppCheckAllowedScopes",
    description: "Проверить, есть ли доступ к данным.",
    params: [
      {
        param: "scopes",
        type: "string",
        description: "Список прав через запятую. Например friends,notify.",
      },
    ],
  },
];
