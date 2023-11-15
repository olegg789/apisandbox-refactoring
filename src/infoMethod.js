export let infoMethod = [
  {
    title: "Account",
    methods: [
      {
        title: "account.getActiveOffers",
        description:
          "Возвращает список активных рекламных предложений (офферов), выполнив которые, пользователь сможет получить соответствующее количество голосов на свой счёт внутри приложения.",
        access_rights: [],
        params: [
          {
            name: "offset",
            description:
              "смещение, необходимое для выборки определенного подмножества офферов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "количество офферов, которое необходимо получить",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "account.getAppPermissions",
        description:
          "Получает настройки текущего пользователя в данном приложении.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description: "",
            type: "positive",
            is_required: true,
          },
          {
            name: "user_id",
            description: "",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "account.getCounters",
        description: "Возвращает ненулевые значения счетчиков пользователя.",
        access_rights: [],
        params: [
          {
            name: "filter",
            description:
              "Cчетчики, информацию о которых нужно вернуть. Может включать следующие значения:\n* `friends` — новые заявки в друзья;\n* `friends_suggestions` — предлагаемые друзья;\n* `messages` — новые сообщения;\n* `photos` — новые отметки на фотографиях;\n* `videos` — новые отметки на видеозаписях;\n* `gifts` — подарки;\n* `events` — события;\n* `groups` — сообщества;\n* `notifications` — ответы;\n* `sdk` — запросы в мобильных играх;\n* `app_requests` — уведомления от приложений.\n* `friends_recommendations` — рекомендации друзей.",
            type: "string",
            is_required: false,
          },
          {
            name: "user_id",
            description: "",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "account.setNameInMenu",
        description:
          "Устанавливает короткое название приложения (до 17 символов), которое выводится пользователю в левом меню.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description: "Идентификатор пользователя.",
            type: "positive",
            is_required: true,
          },
          {
            name: "name",
            description: "Короткое название приложения.",
            type: "string",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "AppWidgets",
    methods: [
      {
        title: "appWidgets.getAppImageUploadServer",
        description:
          "Позволяет получить адрес для загрузки фотографии в коллекцию приложения для [виджетов приложений сообществ](api/community-apps-widgets/getting-started).",
        access_rights: [],
        params: [
          {
            name: "image_type",
            description:
              "Тип изображения. Возможные значения:\n* `24x24`;\n* `50x50`;\n* `160x160`;\n* `160x240`;\n* `510x128`.",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "appWidgets.getAppImages",
        description:
          "Позволяет получить коллекцию изображений, загруженных для приложения, в [виджетах приложений сообществ](api/community-apps-widgets/getting-started).",
        access_rights: [],
        params: [],
      },
      {
        title: "appWidgets.getGroupImageUploadServer",
        description:
          "Позволяет получить адрес для загрузки фотографии в коллекцию сообщества для [виджетов приложений сообществ](api/community-apps-widgets/getting-started).",
        access_rights: ["app_widget"],
        params: [],
      },
      {
        title: "appWidgets.getGroupImages",
        description:
          "Позволяет получить коллекцию изображений, загруженных для приложения, в [виджетах приложений сообществ](api/community-apps-widgets/getting-started).",
        access_rights: ["app_widget"],
        params: [],
      },
      {
        title: "appWidgets.getImagesById",
        description:
          "Позволяет получить изображение для [виджетов приложений сообществ](api/community-apps-widgets/getting-started) по его идентификатору.",
        access_rights: [],
        params: [],
      },
      {
        title: "appWidgets.saveAppImage",
        description:
          "Позволяет сохранить изображение в коллекцию приложения для [виджетов приложений сообществ](api/community-apps-widgets/getting-started) после загрузки на сервер.",
        access_rights: [],
        params: [
          {
            name: "hash",
            description:
              "Параметр `hash`, полученный после загрузки на сервер.",
            type: "string",
            is_required: true,
          },
          {
            name: "image",
            description:
              "Параметр `image`, полученный после загрузки на сервер.",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "appWidgets.saveGroupImage",
        description:
          "Позволяет сохранить изображение в коллекцию сообщества для [виджетов приложений сообществ](api/community-apps-widgets/getting-started). после загрузки на сервер.",
        access_rights: ["app_widget"],
        params: [],
      },
      {
        title: "appWidgets.update",
        description:
          "Позволяет обновить [виджет приложения сообщества](api/community-apps-widgets/getting-started).",
        access_rights: ["app_widget"],
        params: [],
      },
    ],
  },
  {
    title: "Apps",
    methods: [
      {
        title: "apps.get",
        description: "Возвращает данные о запрошенном приложении.",
        access_rights: [],
        params: [
          {
            name: "app_id",
            description:
              "Идентификатор приложения, данные которого необходимо получить. \nЕсли этот параметр и параметр `app_ids` не указан, возвращается идентификатор приложения, через которое выдан ключ доступа (`access_token`).",
            type: "positive",
            is_required: false,
          },
          {
            name: "app_ids",
            description:
              "Список идентификаторов приложений, данные которых необходимо получить.",
            type: "string",
            is_required: false,
          },
          {
            name: "platform",
            description:
              "Платформа, для которой необходимо вернуть данные. Возможные значения:\n* `ios` — iOS;\n* `android` — Android;\n* `winphone` — Windows Phone;\n* `web` — приложения на vk.com. \nПо умолчанию: `web`.",
            type: "string",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — возвращать дополнительные поля. По умолчанию возвращает только основные поля приложений.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "return_friends",
            description:
              "`1` – возвращать список друзей, установивших это приложение. По умолчанию: `0`.\n\nПараметр учитывается только при передаче `access_token`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей, которые необходимо вернуть для профилей пользователей.\nДоступные значения: \n* `bdate`,\n* `can_post`,\n* `can_see_all_posts`,\n* `can_see_audio`,\n* `can_write_private_message`,\n* `city`,\n* `common_count`,\n* `connections`,\n* `contacts`,\n* `counters`,\n* `country`,\n* `domain`,\n* `education`,\n* `has_mobile`,\n* `last_seen`,\n* `lists`,\n* `online`,\n* `online_mobile`,\n* `photo_100`,\n* `photo_200`,\n* `photo_200_orig`,\n* `photo_400_orig`,\n* `photo_50`,\n* `photo_max`,\n* `photo_max_orig`,\n* `relation`,\n* `relatives`,\n* `schools`,\n* `screen_name`,\n* `sex`,\n* `site`,\n* `status`,\n* `timezone`,\n* `universities`.\n\nПараметр учитывается только при `return_friends` = `1`.",
            type: "string",
            is_required: false,
          },
          {
            name: "name_case",
            description:
              "Падеж для склонения имени и фамилии пользователей. Возможные значения: \n*  `nom` — именительный (по умолчанию);\n*  `gen` — родительный;\n*  `dat` — дательный;\n*  `acc` — винительный;\n*  `ins` — творительный;\n*  `abl` — предложный; \n\nПараметр учитывается только при `return_friends` = `1`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "apps.getCatalog",
        description:
          "Возвращает список приложений, доступных для пользователей сайта через каталог приложений.",
        access_rights: [],
        params: [
          {
            name: "sort",
            description:
              "Способ сортировки приложений. \nВозможные значения:\n* `popular_today` — популярные за день;\n* `visitors` — по посещаемости;\n* `create_date` — по дате создания приложения;\n* `growth_rate` — по скорости роста;\n* `popular_week` — популярные за неделю.\nПо умолчанию: `popular_today`.",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества приложений.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество приложений, информацию о которых необходимо вернуть.",
            type: "positive",
            is_required: true,
          },
          {
            name: "platform",
            description:
              "Платформа, для которой необходимо вернуть приложения. \nВозможные значения:\n* `ios` — iOS;\n* `android` — Android;\n* `winphone` — Windows Phone;\n* `web` — приложения на vk.com;\n* `html5` — Direct Games.\nПо умолчанию: `web`.",
            type: "string",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — возвращать дополнительные поля приложений. Если указан `extended` – `count` не должен быть больше **100**.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "return_friends",
            description:
              "`1` – возвращать список друзей, установивших это приложение. По умолчанию: `0`.\n\nПараметр учитывается только при передаче `access_token`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей, которые необходимо вернуть для [профилей пользователей](reference/objects/user).\nДоступные значения: \n* `bdate`,\n* `can_post`,\n* `can_see_all_posts`,\n* `can_see_audio`,\n* `can_write_private_message`,\n* `city`,\n* `common_count`,\n* `connections`,\n* `contacts`,\n* `counters`,\n* `country`,\n* `domain`,\n* `education`,\n* `has_mobile`,\n* `last_seen`,\n* `lists`,\n* `online`,\n* `online_mobile`,\n* `photo_100`,\n* `photo_200`,\n* `photo_200_orig`,\n* `photo_400_orig`,\n* `photo_50`,\n* `photo_max`,\n* `photo_max_orig`,\n* `relation`,\n* `relatives`,\n* `schools`,\n* `screen_name`,\n* `sex`,\n* `site`,\n* `status`,\n* `timezone`,\n* `universities`.\n\nПараметр учитывается только при `return_friends` = `1`.",
            type: "string",
            is_required: false,
          },
          {
            name: "name_case",
            description:
              "Падеж для склонения имени и фамилии пользователей. \nВозможные значения:\n* именительный – `nom`,\n* родительный – `gen`,\n* дательный – `dat`,\n* винительный – `acc`,\n* творительный – `ins`,\n* предложный – `abl`.\n\nПо умолчанию: `nom`.\n\nПараметр учитывается только при `return_friends` = `1`.",
            type: "string",
            is_required: false,
          },
          {
            name: "q",
            description: "Поисковая строка для поиска по каталогу приложений.",
            type: "string",
            is_required: false,
          },
          {
            name: "genre_id",
            description: "Идентификатор жанра.",
            type: "positive",
            is_required: false,
          },
          {
            name: "filter",
            description:
              "`installed` — возвращает список установленных приложений (только для мобильных приложений),\n`featured` — возвращает список приложений, установленных в «Выбор редакции» (только для мобильных приложений).",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "apps.getLeaderboard",
        description: "Возвращает рейтинг пользователей в игре.",
        access_rights: [],
        params: [
          {
            name: "type",
            description:
              "Тип турнирной таблицы. Возможные значения:\n* `level` — по уровням;\n* `points` — по очкам, начисленным за выполнение миссий;\n* `score` — по очкам, начисленным напрямую ([apps.getScore](method/apps.getScore)).",
            type: "string",
            is_required: true,
          },
          {
            name: "global",
            description:
              "Тип рейтинга. Возможные значения:\n* `1` — глобальный рейтинг по всем игрокам (возвращается не более **20** результатов);\n* `0` — рейтинг по друзьям пользователя.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — возвращать дополнительную информацию о пользователе.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "apps.getMiniAppPolicies",
        description: "",
        access_rights: [],
        params: [
          {
            name: "app_id",
            description: "",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "apps.getScopes",
        description: "",
        access_rights: [],
        params: [
          {
            name: "type",
            description: "",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "apps.getScore",
        description:
          "Метод возвращает количество очков пользователя в этой игре.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description: "Идентификатор пользователя.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "apps.promoHasActiveGift",
        description: "Проверить есть ли у пользователя подарок в игре.",
        access_rights: [],
        params: [
          {
            name: "promo_id",
            description: "Идентификатор промо-акции.",
            type: "positive",
            is_required: true,
          },
          {
            name: "user_id",
            description:
              "Идентификатор пользователя. Используется только при запросе с сервисным токеном.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "apps.promoUseGift",
        description:
          "Использовать подарок, полученный пользователем в промо-акции.",
        access_rights: [],
        params: [
          {
            name: "promo_id",
            description: "Идентификатор акции.",
            type: "positive",
            is_required: true,
          },
          {
            name: "user_id",
            description:
              "Идентификатор пользователя. Используется только при запросе с сервисным токеном.",
            type: "positive",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Auth",
    methods: [
      {
        title: "auth.checkPhone",
        description:
          "Проверяет правильность введённого номера (возможность его использования для регистрации или авторизации).",
        access_rights: [],
        params: [
          {
            name: "phone",
            description: " Номер телефона регистрируемого пользователя.",
            type: "string",
            is_required: true,
          },
          {
            name: "client_id",
            description: "Идентификатор вашего приложения.",
            type: "integer",
            is_required: false,
          },
          {
            name: "client_secret",
            description:
              "Секретный ключ приложения, доступный в разделе редактирования приложения.",
            type: "string",
            is_required: false,
          },
          {
            name: "auth_by_phone",
            description:
              "`1` — проверить правильность номера для авторизации, а не для регистрации нового аккаунта. По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "auth.restore",
        description:
          "Позволяет восстановить доступ к аккаунту, используя код, полученный через SMS.\n\n> Данный метод доступен только приложениям, имеющим доступ к [Прямой авторизации](api/direct-auth).",
        access_rights: [],
        params: [
          {
            name: "phone",
            description: "Номер телефона пользователя.",
            type: "string",
            is_required: true,
          },
          {
            name: "last_name",
            description: "Фамилия пользователя.",
            type: "string",
            is_required: true,
          },
        ],
      },
    ],
  },
  {
    title: "Board",
    methods: [
      {
        title: "board.getComments",
        description: "Возвращает список сообщений в указанной теме.",
        access_rights: [],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, информацию об обсуждениях которого нужно получить.",
            type: "positive",
            is_required: true,
          },
          {
            name: "topic_id",
            description: "Идентификатор обсуждения.",
            type: "positive",
            is_required: true,
          },
          {
            name: "need_likes",
            description:
              "`1` — будет возвращено дополнительное поле `likes`. По умолчанию поле `likes` не возвращается.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "start_comment_id",
            description:
              "Идентификатор комментария, начиная с которого нужно вернуть список (подробности см. ниже).",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества сообщений.",
            type: "integer",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество сообщений, которое необходимо получить (но не более **100**). По умолчанию — **20**.",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "Если указать в качестве этого параметра `1`, то будет возвращена информация о пользователях, являющихся авторами сообщений. По умолчанию `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "sort",
            description:
              "Порядок сортировки комментариев:\n* `asc` — хронологический;\n* `desc` — антихронологический.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "board.getTopics",
        description: "Возвращает список тем в обсуждениях указанной группы.",
        access_rights: [],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, информацию об обсуждениях которого необходимо получить. Если сообщество закрытое или частное, для вызова метода потребуется право доступа `groups`.",
            type: "positive",
            is_required: true,
          },
          {
            name: "topic_ids",
            description:
              "Список идентификаторов тем, которые необходимо получить (не более **100**). По умолчанию возвращаются все темы. Если указан данный параметр, игнорируются параметры `order`, `offset` и `count` (возвращаются все запрошенные темы в указанном порядке).",
            type: "string",
            is_required: false,
          },
          {
            name: "order",
            description:
              "Порядок, в котором необходимо вернуть список тем. Возможные значения:\n* `1` — по убыванию даты обновления;\n* `2` — по убыванию даты создания;\n* `-1` — по возрастанию даты обновления;\n* `-2` — по возрастанию даты создания.\nПо умолчанию темы возвращаются в порядке, установленном администратором группы. «Прилепленные» темы при любой сортировке возвращаются первыми в списке.",
            type: "integer",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества тем.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество тем, которое необходимо получить (но не более **100**). По умолчанию — **40**.",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "Если указать в качестве этого параметра `1`, то будет возвращена информация о пользователях, являющихся создателями тем или оставившими в них последнее сообщение. По умолчанию `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "preview",
            description:
              "Набор флагов, определяющий, необходимо ли вернуть вместе с информацией о темах текст первых и последних сообщений в них. Является суммой флагов:\n* `1` — вернуть первое сообщение в каждой теме (поле `first_comment`);\n* `2` — вернуть последнее сообщение в каждой теме (поле `last_comment`). По умолчанию — `0` (не возвращать текст сообщений)`",
            type: "integer",
            is_required: false,
          },
          {
            name: "preview_length",
            description:
              "Количество символов, по которому нужно обрезать первое и последнее сообщение. Укажите `0`, если Вы не хотите обрезать сообщение. (по умолчанию — `90`).",
            type: "positive",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Database",
    methods: [
      {
        title: "database.getChairs",
        description:
          "Возвращает список кафедр университета по указанному факультету.",
        access_rights: [],
        params: [
          {
            name: "faculty_id",
            description:
              "Идентификатор факультета, кафедры которого необходимо получить.",
            type: "positive",
            is_required: true,
          },
          {
            name: "offset",
            description:
              "Отступ, необходимый для получения определенного подмножества кафедр.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество кафедр которое необходимо получить.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "database.getCities",
        description: "Возвращает список городов.",
        access_rights: [],
        params: [
          {
            name: "country_id",
            description:
              "Идентификатор страны, полученный [database.getCountries](method/database.getCountries).",
            type: "positive",
            is_required: true,
          },
          {
            name: "region_id",
            description:
              "Идентификатор региона, города которого необходимо получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "q",
            description:
              "Строка поискового запроса. Например, «Санкт».\nМаксимальная длина строки — 15 символов.",
            type: "string",
            is_required: false,
          },
          {
            name: "need_all",
            description:
              "`1` – возвращать все города.\n`0` – возвращать только основные города.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Отступ, необходимый для получения определенного подмножества городов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество городов, которые необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "database.getCitiesById",
        description:
          "Возвращает информацию о городах и регионах по их идентификаторам.",
        access_rights: [],
        params: [
          {
            name: "city_ids",
            description: "Идентификаторы городов и регионов.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "database.getCountries",
        description: "Возвращает список стран.",
        access_rights: [],
        params: [
          {
            name: "need_all",
            description: "`1` — вернуть список всех стран.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "code",
            description:
              "Перечисленные через запятую двухбуквенные коды стран в стандарте [ISO 3166-1 alpha-2](reference/country-codes), для которых необходимо выдать информацию.\n\nПример значения `code`:\n\n```\nRU,UA,BY\n```",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Отступ, необходимый для выбора определенного подмножества стран.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество стран, которое необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "database.getCountriesById",
        description: "Возвращает информацию о странах по их идентификаторам",
        access_rights: [],
        params: [
          {
            name: "country_ids",
            description: "Идентификаторы стран.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "database.getFaculties",
        description: "Возвращает список факультетов.",
        access_rights: [],
        params: [
          {
            name: "university_id",
            description:
              "Идентификатор университета, факультеты которого необходимо получить.",
            type: "positive",
            is_required: true,
          },
          {
            name: "offset",
            description:
              "Отступ, необходимый для получения определенного подмножества факультетов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество факультетов которое необходимо получить.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "database.getMetroStations",
        description: "Возвращает список станций метро",
        access_rights: [],
        params: [
          {
            name: "city_id",
            description:
              "Идентификатор города, полученный методом [database.getCities](method/database.getCities).",
            type: "positive",
            is_required: true,
          },
          {
            name: "offset",
            description:
              "Отступ, необходимый для выбора определенного подмножества станций.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество станций, которое необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description: "",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "database.getMetroStationsById",
        description:
          "Возвращает информацию об одной или нескольких станциях метро по их идентификаторам.",
        access_rights: [],
        params: [
          {
            name: "station_ids",
            description: "Список идентификаторов станций метро",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "database.getRegions",
        description: "Возвращает список регионов.",
        access_rights: [],
        params: [
          {
            name: "country_id",
            description:
              "Идентификатор страны, полученный в методе [database.getCountries](method/database.getCountries).",
            type: "positive",
            is_required: true,
          },
          {
            name: "q",
            description: "Строка поискового запроса. Например, «Лен».",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Отступ, необходимый для выбора определенного подмножества регионов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество регионов, которое необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "database.getSchoolClasses",
        description:
          "Возвращает список классов, характерных для школ определенной страны.",
        access_rights: [],
        params: [
          {
            name: "country_id",
            description:
              "Идентификатор страны, доступные классы в которой необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "database.getSchools",
        description: "Возвращает список школ.",
        access_rights: [],
        params: [
          {
            name: "q",
            description: "Строка поискового запроса. Например, «гимназия».",
            type: "string",
            is_required: false,
          },
          {
            name: "city_id",
            description:
              "Идентификатор города, школы которого необходимо вернуть.",
            type: "positive",
            is_required: true,
          },
          {
            name: "offset",
            description:
              "Отступ, необходимый для получения определенного подмножества школ.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество школ, которое необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "database.getUniversities",
        description: "Возвращает список высших учебных заведений.",
        access_rights: [],
        params: [
          {
            name: "q",
            description: "Строка поискового запроса. Например, «СПБ».",
            type: "string",
            is_required: false,
          },
          {
            name: "country_id",
            description:
              "Идентификатор страны, учебные заведения которой необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
          {
            name: "city_id",
            description:
              "Идентификатор города, учебные заведения которого необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Отступ, необходимый для получения определенного подмножества учебных заведений.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество учебных заведений, которое необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Docs",
    methods: [
      {
        title: "docs.add",
        description: "Копирует документ в документы текущего пользователя.",
        access_rights: ["docs"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит документ.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id=-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "doc_id",
            description: "Идентификатор документа.",
            type: "positive",
            is_required: true,
          },
          {
            name: "access_key",
            description:
              "Ключ доступа документа. Этот параметр следует передать, если вместе с остальными данными о документе было возвращено поле `access_key`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "docs.delete",
        description: "Удаляет документ пользователя или группы.",
        access_rights: ["docs"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит документ.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id=-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "doc_id",
            description: "Идентификатор документа.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "docs.edit",
        description: "Редактирует документ пользователя или группы.",
        access_rights: ["docs"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит документ.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «-» — например, `owner_id=-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "doc_id",
            description: "Идентификатор документа.",
            type: "positive",
            is_required: true,
          },
          {
            name: "title",
            description: "Название документа.",
            type: "string",
            is_required: false,
          },
          {
            name: "tags",
            description: "Метки для поиска.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "docs.get",
        description:
          "Возвращает расширенную информацию о документах пользователя или сообщества.",
        access_rights: ["docs"],
        params: [
          {
            name: "count",
            description:
              "Количество документов, информацию о которых нужно вернуть. \nПо умолчанию: все документы. Максимальное количество документов, которое можно получить: 2000.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества документов. Максимальное значение: `1999`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "type",
            description:
              "Фильтр по типу документа.\n\nВозможные варианты:\n*  `1` — текстовые документы;\n*  `2` — архивы;\n*  `3` — gif;\n*  `4` — изображения;\n*  `5` — аудио;\n*  `6` — видео;\n*  `7` — электронные книги;\n*  `8` — неизвестно.",
            type: "positive",
            is_required: false,
          },
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежат документы.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id=-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
          {
            name: "return_tags",
            description: "",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "docs.getById",
        description:
          "Возвращает информацию о документах по их идентификаторам.",
        access_rights: ["docs"],
        params: [
          {
            name: "docs",
            description:
              "идентификаторы документов, информацию о которых нужно вернуть.\nПример значения `docs`:\n\n```\n66748_91488,66748_91455\n```\n\nМетод поддерживает передачу [access_key](reference/objects).",
            type: "string",
            is_required: true,
          },
          {
            name: "return_tags",
            description: "",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "docs.getMessagesUploadServer",
        description:
          "Получает адрес сервера для [загрузки документа](upload_files_2%2310._%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0_%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2) в личное сообщение.",
        access_rights: ["docs"],
        params: [
          {
            name: "type",
            description:
              "Тип документа. Возможные значения:\n* `doc` — обычный документ;\n* `audio_message` — голосовое сообщение.",
            type: "string",
            is_required: false,
          },
          {
            name: "peer_id",
            description:
              "Идентификатор назначения.\n\nДля пользователя: `id` пользователя.\n\nДля групповой беседы: 2000000000 + `id` беседы.\n\nДля сообщества: `-id` сообщества.",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "docs.getTypes",
        description: "Возвращает доступные для пользователя типы документов.",
        access_rights: ["docs"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежат документы.",
            type: "integer",
            is_required: true,
          },
        ],
      },
      {
        title: "docs.getUploadServer",
        description:
          "Возвращает адрес сервера для [загрузки документов](https://dev.vk.com/api/upload#%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2).",
        access_rights: ["docs"],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор сообщества (если необходимо загрузить документ в список документов сообщества). Если документ нужно загрузить в список пользователя, метод вызывается без дополнительных параметров.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "docs.getWallUploadServer",
        description:
          "Возвращает адрес сервера для [загрузки документов](api/upload) в папку **Отправленные**, для последующей отправки документа на стену или личным сообщением.",
        access_rights: ["docs"],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, в которое нужно загрузить документ.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "docs.save",
        description:
          "Сохраняет документ после его успешной [загрузки](api/upload) на сервер.",
        access_rights: ["docs"],
        params: [
          {
            name: "file",
            description:
              "Параметр, возвращаемый в результате [загрузки файла](api/upload) на сервер.",
            type: "string",
            is_required: true,
          },
          {
            name: "title",
            description: "Название документа.",
            type: "string",
            is_required: false,
          },
          {
            name: "tags",
            description: "Метки для поиска.",
            type: "string",
            is_required: false,
          },
          {
            name: "return_tags",
            description: "",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "docs.search",
        description: "Возвращает результаты поиска по документам.",
        access_rights: ["docs"],
        params: [
          {
            name: "q",
            description:
              "Строка поискового запроса. Например, «зелёные тапочки».",
            type: "string",
            is_required: false,
          },
          {
            name: "search_own",
            description:
              "`1` — искать среди собственных документов пользователя.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество документов, информацию о которых нужно вернуть.\n\n> Обратите внимание, даже при использовании параметра `offset` для получения информации доступны только первые 1000 результатов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определённого подмножества документов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "return_tags",
            description: "",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Donut",
    methods: [
      {
        title: "donut.getFriends",
        description:
          "Возвращает список донов, которые подписаны на определенные сообщества, из числа друзей пользователя.",
        access_rights: ["friends", "groups"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор сообщества.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества друзей.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество друзей, информацию о которых необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "donut.getSubscription",
        description: "Возвращает информацию о подписке VK Donut.",
        access_rights: ["groups"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор сообщества.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
        ],
      },
      {
        title: "donut.getSubscriptions",
        description: "Возвращает информацию о подписках пользователя.",
        access_rights: ["groups"],
        params: [
          {
            name: "fields",
            description:
              "Список дополнительных полей профиля, которые необходимо вернуть. См. [подробное описание](reference/objects/user).",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества подписок.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество подписок, информацию о которых необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "donut.isDon",
        description:
          "Возвращает информацию о том, подписан ли пользователь на платный контент (является доном).",
        access_rights: ["groups"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор сообщества.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
        ],
      },
    ],
  },
  {
    title: "DownloadedGames",
    methods: [
      {
        title: "downloadedGames.getPaidStatus",
        description: "",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description: "ID пользователя возможно купившего приложение.",
            type: "positive",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Friends",
    methods: [
      {
        title: "friends.areFriends",
        description:
          "Возвращает информацию о том, добавлен ли текущий пользователь в друзья у указанных пользователей.",
        access_rights: ["friends"],
        params: [
          {
            name: "user_ids",
            description:
              "Идентификаторы пользователей, статус дружбы с которыми нужно проверить.",
            type: "string",
            is_required: true,
          },
          {
            name: "need_sign",
            description:
              '`1` – необходимо вернуть поле `sign` которое равно: `md5("{id}_{user_id}_{friends_status}_{application_secret}")`, \nГде, id — это идентификатор пользователя, для которого выполняется запрос. Позволяет на сервере убедиться что данные не были подделаны на клиенте.\n`0` — поле `sign` возвращать не нужно.',
            type: "checkbox",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1`  — необходимо вернуть `is_request_unread`, если есть непрочитанная заявка в друзья.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "friends.get",
        description:
          "Возвращает список идентификаторов друзей пользователя или расширенную информацию о друзьях пользователя (при использовании параметра `fields`).",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, для которого необходимо получить список друзей. Если параметр не задан, то считается, что он равен идентификатору текущего пользователя (справедливо для вызова с передачей `access_token`).",
            type: "integer",
            is_required: false,
          },
          {
            name: "order",
            description:
              "Порядок, в котором нужно вернуть список друзей. Допустимые значения:\n* `hints` — сортировать по рейтингу, аналогично тому, как друзья сортируются в разделе **Мои друзья**.\n> Это значение доступно только для Standalone-приложений с ключом доступа, полученным по схеме Implicit Flow.\n* `random` — возвращает друзей в случайном порядке.\n* `name` — сортировать по имени. Данный тип сортировки работает медленно, так как сервер будет получать всех друзей, а не только указанное количество `count`. (работает только при переданном параметре `fields`).\n\nПо умолчанию список сортируется в порядке возрастания идентификаторов пользователей.",
            type: "string",
            is_required: false,
          },
          {
            name: "list_id",
            description:
              "Идентификатор списка друзей, полученный методом [friends.getLists](method/friends.getLists), друзей из которого необходимо получить. Данный параметр учитывается, только когда параметр `user_id` равен идентификатору текущего пользователя.\n\n> Этот параметр доступен только для Standalone-приложений с ключом доступа, полученным по схеме Implicit Flow.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество друзей, которое нужно вернуть.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества друзей.",
            type: "positive",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей, которые необходимо вернуть.\n\nДоступные значения:\n* `bdate`;\n* `can_post`;\n* `can_see_all_posts`;\n* `can_write_private_message`;\n* `city`;\n* `contacts`;\n* `country`;\n* `domain`;\n* `education`;\n* `has_mobile`;\n* `imezone`;\n* `last_seen`;\n* `nickname`;\n* `online`;\n* `photo_100`;\n* `photo_200_orig`;\n* `photo_50`;\n* `relation`;\n* `sex`;\n* `status`;\n* `universities`.",
            type: "string",
            is_required: false,
          },
          {
            name: "name_case",
            description:
              "Падеж для склонения имени и фамилии пользователя. \nВозможные значения: \n* именительный – `nom`;\n* родительный – `gen`;\n* дательный – `dat`;\n* винительный – `acc`; \n* творительный – `ins`; \n* предложный – `abl`.\nПо умолчанию `nom`.",
            type: "string",
            is_required: false,
          },
          {
            name: "ref",
            description: "",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "friends.getAppUsers",
        description:
          "Возвращает список идентификаторов друзей текущего пользователя, которые установили данное приложение.",
        access_rights: ["friends"],
        params: [],
      },
      {
        title: "friends.getAvailableForCall",
        description:
          "Позволяет получить список идентификаторов пользователей, доступных для вызова в приложении, используя метод [Client API](sdk/javascript) `callUser`.\n\nПодробнее о [схеме вызова](sdk/javascript) из приложений.",
        access_rights: ["friends"],
        params: [
          {
            name: "fields",
            description:
              "Список дополнительных полей, которые необходимо вернуть.\n\nДоступные значения: \n* `bdate`;\n* `can_post`;\n* `can_see_all_posts`;\n* `can_write_private_message`;\n* `city`;\n* `contacts`;\n* `country`;\n* `domain`;\n* `education`;\n* `has_mobile`; \n* `last_seen`;\n* `nickname`; \n* `online`;\n* `photo_100`; \n* `photo_200_orig`; \n* `photo_50`;\n* `relation`;\n* `sex`;\n* `status`; \n* `timezone`; \n* `universities`.",
            type: "string",
            is_required: false,
          },
          {
            name: "name_case",
            description:
              "Падеж для склонения имени и фамилии пользователя. \nВозможные значения: \n* именительный – `nom`;\n* родительный – `gen`;\n* дательный – `dat`;\n* винительный – `acc`; \n* творительный – `ins`; \n* предложный – `abl`. \n\nПо умолчанию `nom`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "friends.getMutual",
        description:
          "Возвращает список идентификаторов общих друзей между парой пользователей.",
        access_rights: ["friends"],
        params: [
          {
            name: "source_uid",
            description:
              "Идентификатор пользователя, чьи друзья пересекаются с друзьями пользователя с идентификатором `target_uid`. Если параметр не задан, то считается, что `source_uid` равен идентификатору текущего пользователя.",
            type: "positive",
            is_required: false,
          },
          {
            name: "target_uid",
            description:
              "Идентификатор пользователя, с которым необходимо искать общих друзей.",
            type: "positive",
            is_required: false,
          },
          {
            name: "target_uids",
            description:
              "Список идентификаторов пользователей, с которыми необходимо искать общих друзей.",
            type: "string",
            is_required: false,
          },
          {
            name: "order",
            description:
              "Порядок, в котором нужно вернуть список общих друзей. Допустимые значения: `random`— возвращает друзей в случайном порядке. По умолчанию — в порядке возрастания идентификаторов.",
            type: "string",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество общих друзей, которое нужно вернуть. (По умолчанию — `все общие друзья`).",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества общих друзей.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "friends.getOnline",
        description:
          "Возвращает список идентификаторов друзей пользователя, находящихся на сайте.",
        access_rights: ["friends"],
        params: [
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, для которого необходимо получить список друзей онлайн. Если параметр не задан, то считается, что он равен идентификатору текущего пользователя.",
            type: "positive",
            is_required: false,
          },
          {
            name: "list_id",
            description:
              "Идентификатор списка друзей. Если параметр не задан, возвращается информация обо всех друзьях, находящихся на сайте.",
            type: "positive",
            is_required: false,
          },
          {
            name: "online_mobile",
            description:
              "`1` — будет возвращено дополнительное поле `online_mobile`. \nПо умолчанию — `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "order",
            description:
              "Порядок, в котором нужно вернуть список друзей, находящихся на сайте. Допустимые значения: `random` — возвращает друзей в случайном порядке, `hints` — сортировать по рейтингу, аналогично тому, как друзья сортируются в разделе **Мои друзья** (данный параметр доступен только для [Desktop-приложений](guide)).\n\nПо умолчанию список сортируется в порядке возрастания идентификаторов пользователей.",
            type: "string",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество друзей онлайн, которое нужно вернуть. (По умолчанию — **все друзья онлайн**)",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "смещение, необходимое для выборки определенного подмножества друзей онлайн.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "friends.getRecent",
        description:
          "Возвращает список идентификаторов недавно добавленных друзей текущего пользователя.",
        access_rights: ["friends"],
        params: [
          {
            name: "count",
            description:
              "Максимальное количество недавно добавленных друзей, которое необходимо получить.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "friends.search",
        description: "Позволяет искать по списку друзей пользователей.",
        access_rights: ["friends"],
        params: [
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, по списку друзей которого необходимо произвести поиск.",
            type: "positive",
            is_required: true,
          },
          {
            name: "q",
            description: "Строка запроса.",
            type: "string",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей, которые необходимо вернуть.\nДоступные значения: \n* `bdate`;\n* `can_post`;\n* `can_see_all_posts`;\n* `can_write_private_message`;\n* `city`;\n* `contacts` \n* `country`\n* `domain_`;\n* `education`;\n* `has_mobile`; \n* `last_seen`;\n* `nickname`; \n* `online`;\n* `photo_100`;\n* `photo_200_orig`; \n* `photo_50`; \n* `relation`;\n* `screen_name`;\n* `sex`;\n* `status`;\n* `timezone`;\n* `universities`.",
            type: "string",
            is_required: false,
          },
          {
            name: "name_case",
            description:
              "Падеж для склонения имени и фамилии пользователя. Возможные значения: \n* именительный – `nom`;\n* родительный – `gen`;\n* дательный – `dat`;\n* винительный – `acc`;\n* творительный – `ins`;\n* предложный – `abl`. \nПо умолчанию `nom`.",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества друзей.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество друзей, которое нужно вернуть.",
            type: "positive",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Groups",
    methods: [
      {
        title: "groups.get",
        description: "Возвращает список сообществ указанного пользователя.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, информацию о сообществах которого требуется получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "Если указать в качестве этого параметра `1`, то будет возвращена полная информация о группах пользователя. По умолчанию `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "filter",
            description:
              "Список фильтров сообществ, которые необходимо вернуть, перечисленные через запятую. \nДоступны значения:\n* `admin`;\n* `editor`; \n* `moder`; \n* `advertiser`; \n* `groups`;\n* `publics`;\n* `events`;\n* `hasAddress`. \n\nПо умолчанию возвращаются все сообщества пользователя. \n\nПри указании фильтра `hasAddress` вернутся сообщества, в которых указаны адреса в соответствующем блоке, `admin` будут возвращены сообщества, в которых пользователь является администратором, `editor` — администратором или редактором, `moder` — администратором, редактором или модератором, `advertiser` — рекламодателем. Если передано несколько фильтров, то их результат объединяется.",
            type: "string",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей, которые необходимо вернуть. \nВозможные значения: \n* `activity`;\n* `can_create_topic`;\n* `can_post`;\n* `can_see_all_posts`; \n* `city`;\n* `contacts`; \n* `counters`; \n* `country`;\n* `description`; \n* `finish_date`;\n* `fixed_post`;\n* `links`;\n* `members_count`;\n* `place`;\n* `site`;\n* `start_date`;\n* `status`;\n* `verified`; \n* `wiki_page`.\n\nПодробнее см. [описание полей объекта group](reference/objects/group).\nОбратите внимание, этот параметр учитывается только при `extended`=`1`.",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определённого подмножества сообществ.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество сообществ, информацию о которых нужно вернуть.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "groups.getAddresses",
        description: "Возвращает адрес указанного сообщества.",
        access_rights: [],
        params: [
          {
            name: "group_id",
            description: "Идентификатор сообщества.",
            type: "positive",
            is_required: true,
          },
          {
            name: "address_ids",
            description:
              "Перечисленные через запятую идентификаторы адресов, информацию о которых необходимо вернуть.",
            type: "string",
            is_required: false,
          },
          {
            name: "latitude",
            description:
              "Географическая широта отметки, заданная в градусах (от -90 до 90).",
            type: "string",
            is_required: false,
          },
          {
            name: "longitude",
            description:
              "Географическая долгота отметки, заданная в градусах (от -180 до 180).",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества черного списка.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество адресов, которое необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей [сообществ](reference/objects/group), которые необходимо вернуть.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "groups.getById",
        description:
          "Возвращает информацию о заданном сообществе или о нескольких сообществах.",
        access_rights: [],
        params: [
          {
            name: "group_ids",
            description:
              "Идентификаторы или короткие имена сообществ. Максимальное число идентификаторов — 500.",
            type: "string",
            is_required: false,
          },
          {
            name: "group_id",
            description: "Иидентификатор или короткое имя сообщества.",
            type: "string",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей, которые необходимо вернуть. Например: \n* `activity`;\n* `ban_info`;\n* `can_post`;\n* `can_see_all_posts`;\n* `city`;\n* `contacts`;\n* `counters`;\n* `country`;\n* `cover`;\n* `description`;\n* `finish_date`;\n* `fixed_post`;\n* `links`;\n* `market`;\n* `members_count`;\n* `place`;\n* `site`;\n* `start_date`;\n* `status`;\n* `verified`;\n* `wiki_page`.\n\nПолный список полей доступен [на этой странице](reference/objects/group). \n\n> Обратите внимание, для получения некоторых полей требуется право доступа `groups`. Подробнее смотрите [описание полей объекта group](reference/objects/group).",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "groups.getCatalog",
        description:
          "Возвращает список сообществ выбранной категории каталога.",
        access_rights: [],
        params: [
          {
            name: "category_id",
            description:
              "Идентификатор категории, полученный в методе [groups.getCatalogInfo](method/groups.getCatalogInfo).",
            type: "positive",
            is_required: false,
          },
          {
            name: "subcategory_id",
            description:
              "Идентификатор подкатегории, полученный в методе [groups.getCatalogInfo](method/groups.getCatalogInfo).",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "groups.getCatalogInfo",
        description: "Возвращает список категорий для каталога сообществ.",
        access_rights: [],
        params: [
          {
            name: "extended",
            description:
              "`1` — вернуть информацию о количестве сообществ в категории и три сообщества для предпросмотра. \n\nПо умолчанию `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "subcategories",
            description:
              "`1` — вернуть информацию об подкатегориях. \n\nПо умолчанию `0`.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "groups.getMembers",
        description: "Возвращает список участников сообщества.",
        access_rights: [],
        params: [
          {
            name: "group_id",
            description: "Идентификатор или короткое имя сообщества.",
            type: "string",
            is_required: false,
          },
          {
            name: "sort",
            description:
              "Сортировка, с которой необходимо вернуть список участников. Может принимать значения:\n* `id_asc` — в порядке возрастания ID;\n* `id_desc` — в порядке убывания ID;\n* `time_asc` — в хронологическом порядке по вступлению в сообщество;\n* `time_desc` — в антихронологическом порядке по вступлению в сообщество. \nСортировка по `time_asc` и `time_desc` возможна только при вызове от модератора сообщества.",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определённого подмножества участников. По умолчанию `0`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество участников сообщества, информацию о которых необходимо получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей, которые необходимо вернуть. \nДоступные значения: \n* `bdate`;\n* `can_post`;\n* `can_see_all_posts`;\n* `can_see_audio`;\n* `can_write_private_message`;\n* `city`;\n* `common_count`;\n* `connections`;\n* `contacts`;\n* `country`;\n* `domain`;\n* `education`;\n* `has_mobile`;\n* `last_seen`;\n* `lists`;\n* `online`;\n* `online_mobile`;\n* `photo_100`;\n* `photo_200`;\n* `photo_200_orig`; \n* `photo_400_orig`;\n* `photo_50`;\n* `photo_max`;\n* `photo_max_orig`;\n* `relation`;\n* `relatives`;\n* `schools`;\n* `sex`;\n* `site`;\n* `status`;\n* `universities`.",
            type: "string",
            is_required: false,
          },
          {
            name: "filter",
            description:
              "* `friends` — будут возвращены только друзья в этом сообществе.\n* `unsure` — будут возвращены пользователи, которые выбрали «Возможно пойду» (если сообщество относится к мероприятиям).\n* `managers` — будут возвращены только руководители сообщества (доступно при запросе с передачей `access_token` от имени администратора сообщества).\n* `donut` — будут возвращены только доны (пользователи, у которых есть платная подписка VK Donut).",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "groups.getOnlineStatus",
        description: "Получает информацию о статусе «онлайн» в сообществе.",
        access_rights: [],
        params: [
          {
            name: "group_id",
            description: "идентификатор сообщества.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "groups.getTokenPermissions",
        description: "Возвращает настройки прав для ключа доступа сообщества.",
        access_rights: [],
        params: [],
      },
      {
        title: "groups.isMember",
        description:
          "Возвращает информацию о том, является ли пользователь участником сообщества.",
        access_rights: [],
        params: [
          {
            name: "group_id",
            description: "Идентификатор или короткое имя сообщества.",
            type: "string",
            is_required: true,
          },
          {
            name: "user_id",
            description: "Идентификатор пользователя.",
            type: "positive",
            is_required: false,
          },
          {
            name: "user_ids",
            description: "Идентификаторы пользователей, не более 500.",
            type: "string",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1`  — вернуть ответ в расширенной форме. По умолчанию — `0`.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "groups.search",
        description: "Осуществляет поиск сообществ по заданной подстроке.",
        access_rights: [],
        params: [
          {
            name: "q",
            description: "Текст поискового запроса.",
            type: "string",
            is_required: true,
          },
          {
            name: "type",
            description:
              "Тип сообщества. Возможные значения: `group`, `page`, `event`.",
            type: "string",
            is_required: false,
          },
          {
            name: "country_id",
            description: "Идентификатор страны.",
            type: "positive",
            is_required: false,
          },
          {
            name: "city_id",
            description:
              "Идентификатор города. При передаче этого параметра поле `country_id` игнорируется.",
            type: "positive",
            is_required: false,
          },
          {
            name: "future",
            description:
              "При передаче значения `1` будут выведены предстоящие события. Учитывается только при передаче в качестве `type` значения `event`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "market",
            description:
              "При передаче значения `1` будут выведены сообщества с включёнными товарами.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "sort",
            description:
              "* `0` — сортировать по умолчанию (аналогично результатам поиска в полной версии сайта);\n* `6` — сортировать по количеству пользователей.\n",
            type: "integer",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определённого подмножества результатов поиска. По умолчанию — `0`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество результатов поиска, которое необходимо вернуть.\n\n> Обратите внимание, даже при использовании параметра `offset` для получения информации доступны только первые 1000 результатов.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "groups.toggleMarket",
        description:
          "Переключает функционал раздела «Товаров» в выбранной группе.",
        access_rights: ["groups"],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, в котором необходимо переключить функционал магазина.",
            type: "positive",
            is_required: true,
          },
          {
            name: "state",
            description:
              "Значение переключателя. \nВозможные значения:\n*  `none` — товары отключены;\n*  `basic` — базовые товары;\n*  `advanced` — расширенные товары.",
            type: "string",
            is_required: true,
          },
          {
            name: "ref",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "utm_source",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "utm_medium",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "utm_campaign",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "utm_content",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "utm_term",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "promocode",
            description: "",
            type: "string",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "LeadForms",
    methods: [
      {
        title: "leadForms.create",
        description: "Создаёт форму сбора заявок.",
        access_rights: ["groups"],
        params: [
          {
            name: "group_id",
            description: "Идентификатор группы, в которой надо создать форму.",
            type: "string",
            is_required: true,
          },
          {
            name: "name",
            description: "Название формы (видно только администратору).",
            type: "string",
            is_required: true,
          },
          {
            name: "title",
            description: "Заголовок формы (видят пользователи).",
            type: "string",
            is_required: true,
          },
          {
            name: "description",
            description: "Описание формы.",
            type: "string",
            is_required: true,
          },
          {
            name: "questions",
            description:
              'Информация о вопросах формы. Массив структур следующего формата:\n*  `type` — тип вопроса;\n*  `label` — заголовок вопроса (только для нестандартных вопросов);\n*  `key` — уникальный ключ вопроса (необязательно; только для нестандартных вопросов);\n*  `options` — массив возможных ответов на вопрос (только для нестандартных вопросов типа `radio`, `select`, `checkbox`).\n\nТипы стандартных вопросов:\n*  `first_name` — имя;\n*  `patronymic_name` — отчество;\n*  `last_name` — фамилия;\n*  `email` — адрес электронной почты;\n*  `phone_number` — номер телефона;\n*  `age` — возраст;\n*  `birthday` — день рождения;\n*  `location` — город и страна.\n\nТипы нестандартных вопросов:\n*  `input` — простое текстовое поле (строка);\n*  `textarea` — большое текстовое поле (абзац);\n*  `radio` — выбор одного из нескольких вариантов;\n*  `checkbox` — выбор нескольких вариантов;\n*  `select` — выбор одного варианта из выпадающего списка.\n\n`options` должен быть массивом структур, описывающих варианты ответа:\n*  `label` — текст ответа;\n*  `key` — ключ ответа (необязательно).\n\nПример:\n```json\n[[\n   {\n      "type":"first_name"\n   },\n   {\n      "type":"input",\n      "label":"Кличка кота"\n   },\n   {\n      "type":"select",\n      "key":"favorite_color",\n      "label":"Любимый цвет",\n      "options":[{\n        "key":"red",\n        "label":"Красный"\n      },{\n        "key":"green",\n        "label":"Зелёный"\n      }]]\n   },\n   {\n      "type":"radio",\n      "label":"Я ношу часы...",\n      "options":[[{\n         "key":"left",\n         "label":"на левой руке"\n      },{\n         "key":"right",\n         "label":"на правой руке"\n      }]]\n   },\n   {\n      "type":"checkbox",\n      "key":"visited_cities",\n      "label":"Города, в которых я был",\n      "options":[[{\n         "label":"Екатеринбург"\n      },{\n         "label":"Волгоград"\n      },{\n         "label":"Санкт-Петербург"      \n      }]]\n   }\n]\n```',
            type: "text",
            is_required: true,
          },
          {
            name: "policy_link_url",
            description: "Ссылка на политику конфиденциальности.",
            type: "string",
            is_required: true,
          },
          {
            name: "photo",
            description:
              "Обложка формы.\n\nИспользуйте значение, полученное после загрузки фотографии на сервер. См. метод [leadForms.getUploadURL](method/leadForms.getUploadURL).\n\nТакже можно переиспользовать существующую фотографию из другой формы. Используйте значение поля `photo`, которое возвращает метод [leadForms.get](method/leadForms.get) или [leadForms.list](method/leadForms.list).",
            type: "string",
            is_required: false,
          },
          {
            name: "confirmation",
            description:
              "Текст подтверждения, который увидит пользователь после отправки формы.",
            type: "string",
            is_required: false,
          },
          {
            name: "site_link_url",
            description: "Ссылка на сайт или сообщество автора формы.",
            type: "string",
            is_required: false,
          },
          {
            name: "active",
            description:
              "Передайте `1`, чтобы активировать форму сразу после создания. Пользователи могут оставлять заявки только в активных формах.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "once_per_user",
            description:
              "Передайте `1`, чтобы разрешить каждому пользователю заполнять форму только один раз.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "pixel_code",
            description:
              "Передайте код пикселя ретаргетинга ВКонтакте в виде `VK-RTRG-000000-XXXXX`. По этому пикселю будет собираться аудитория пользователей, открывших форму. Подробнее о пикселе см. [здесь](https://vk.com/faq12142).",
            type: "string",
            is_required: false,
          },
          {
            name: "notify_admins",
            description:
              "Передайте список идентификаторов пользователей, которым будут отправлены оповещения о заполнении пользователями формы. Оповещения могут быть отправлены только администраторам сообщества.",
            type: "string",
            is_required: false,
          },
          {
            name: "notify_emails",
            description:
              "Передайте список email-адресов, разделённых запятой, на которые будут отправлены оповещения о заполнении пользователями формы. Можно указать до **10** адресов.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "leadForms.delete",
        description: "Удаляет форму сбора заявок.",
        access_rights: ["groups"],
        params: [
          {
            name: "group_id",
            description: "Идентификатор группы, из которой надо удалить форму.",
            type: "string",
            is_required: true,
          },
          {
            name: "form_id",
            description: "Идентификатор удаляемой формы.",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "leadForms.get",
        description: "Возвращает информацию о форме сбора заявок.",
        access_rights: ["groups"],
        params: [
          {
            name: "group_id",
            description: "Идентификатор группы, в которой находится форма.",
            type: "string",
            is_required: true,
          },
          {
            name: "form_id",
            description: "Идентификатор формы.",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "leadForms.getLeads",
        description: "Возвращает заявки формы.",
        access_rights: ["groups"],
        params: [
          {
            name: "group_id",
            description: "Идентификатор сообщества, в котором находится форма.",
            type: "string",
            is_required: true,
          },
          {
            name: "form_id",
            description: "Идентификатор формы.",
            type: "string",
            is_required: true,
          },
          {
            name: "limit",
            description: "Количество возвращаемых заявок за один запрос.",
            type: "positive",
            is_required: false,
          },
          {
            name: "next_page_token",
            description:
              "Строка, полученная из предыдущего запроса для получения следующей порции результатов.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "leadForms.getUploadURL",
        description: "Возвращает URL для загрузки обложки для формы.",
        access_rights: ["groups"],
        params: [],
      },
      {
        title: "leadForms.list",
        description: "Возвращает список форм сообщества.",
        access_rights: ["groups"],
        params: [
          {
            name: "group_id",
            description: "Идентификатор сообщества.",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "leadForms.update",
        description: "Обновляет форму сбора заявок.",
        access_rights: ["groups"],
        params: [
          {
            name: "group_id",
            description: "Идентификатор группы, в которой надо обновить форму.",
            type: "string",
            is_required: true,
          },
          {
            name: "form_id",
            description: "Идентификатор формы, которую надо обновить.",
            type: "string",
            is_required: true,
          },
          {
            name: "name",
            description: "Новое название формы (видно только администратору).",
            type: "string",
            is_required: true,
          },
          {
            name: "title",
            description: "Новый заголовок формы (видят пользователи).",
            type: "string",
            is_required: true,
          },
          {
            name: "description",
            description: "Новое описание формы.",
            type: "string",
            is_required: true,
          },
          {
            name: "questions",
            description:
              "Новые вопросы формы. Подробнее см. метод [leadForms.create](method/leadForms.create).",
            type: "text",
            is_required: true,
          },
          {
            name: "policy_link_url",
            description: "Новая ссылка на политику конфиденциальности.",
            type: "string",
            is_required: true,
          },
          {
            name: "photo",
            description: "Новая обложка формы.",
            type: "string",
            is_required: false,
          },
          {
            name: "confirmation",
            description:
              "Новый текст подтверждения, который увидит пользователь после отправки формы.",
            type: "string",
            is_required: false,
          },
          {
            name: "site_link_url",
            description: "Новая ссылка на сайт или сообщество автора формы.",
            type: "string",
            is_required: false,
          },
          {
            name: "active",
            description:
              "Передайте `1`, чтобы активировать форму. Пользователи могут оставлять заявки только в активных формах.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "once_per_user",
            description:
              "Передайте `1`, чтобы разрешить каждому пользователю заполнять форму только один раз.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "pixel_code",
            description: "Новый код пикселя ретаргетинга ВКонтакте.",
            type: "string",
            is_required: false,
          },
          {
            name: "notify_admins",
            description:
              "Новый список идентификаторов пользователей, которым будут отправлены оповещения о заполнении пользователями формы. Оповещения могут быть отправлены только администраторам сообщества.",
            type: "string",
            is_required: false,
          },
          {
            name: "notify_emails",
            description:
              "Новый список email-адресов, разделённых запятой, на которые будут отправлены оповещения о заполнении пользователями формы. Можно указать до **10** адресов.",
            type: "string",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Likes",
    methods: [
      {
        title: "likes.getList",
        description:
          "Получает список идентификаторов пользователей, которые добавили заданный объект в свой список «Мне нравится».",
        access_rights: [],
        params: [
          {
            name: "type",
            description:
              "Тип объекта. \nВозможные типы:\n* `post` — запись на стене пользователя или группы;\n* `post_ads` — рекламная запись;\n* `comment` — комментарий к записи на стене;\n* `photo` — фотография;\n* `audio` — аудиозапись;\n* `video` — видеозапись;\n* `note` — заметка;\n* `market` — товар;\n* `photo_comment` — комментарий к фотографии;\n* `video_comment` — комментарий к видеозаписи;\n* `topic_comment` — комментарий в обсуждении;\n* `market_comment` — комментарий к товару;\n* `sitepage` — страница сайта, на котором установлен [виджет «Мне нравится»](widgets/like).\n",
            type: "string",
            is_required: true,
          },
          {
            name: "owner_id",
            description:
              "Идентификатор владельца Like-объекта: id пользователя, id сообщества (со знаком «минус») или id приложения. Если параметр `type` равен `sitepage`, то в качестве `owner_id` необходимо передавать `id` приложения. Если параметр не задан, то считается, что он равен либо идентификатору текущего пользователя, либо идентификатору текущего приложения (если `type` равен `sitepage`).",
            type: "integer",
            is_required: false,
          },
          {
            name: "item_id",
            description:
              "Идентификатор Like-объекта. Если `type` равен `sitepage`, то параметр `item_id` может содержать значение параметра `page_id`, используемый при инициализации [виджета «Мне нравится»](widgets/like).",
            type: "integer",
            is_required: false,
          },
          {
            name: "page_url",
            description:
              "URL страницы, на которой установлен [виджет «Мне нравится»](widgets/like). Используется вместо параметра `item_id`, если при размещении виджета не был указан `page_id`.",
            type: "string",
            is_required: false,
          },
          {
            name: "filter",
            description:
              "Указывает, следует ли вернуть всех пользователей, добавивших объект в список «Мне нравится» или только тех, которые рассказали о нём друзьям. Параметр может принимать следующие значения:\n* `likes` — возвращать информацию обо всех пользователях. \n* `copies` — возвращать информацию только о пользователях, рассказавших об объекте друзьям.\nПо умолчанию возвращается информация обо всех пользователях.",
            type: "string",
            is_required: false,
          },
          {
            name: "friends_only",
            description:
              "Указывает, необходимо ли возвращать только пользователей, которые являются друзьями текущего пользователя. Параметр может принимать следующие значения:\n* `0` — возвращать всех пользователей в порядке убывания времени добавления объекта;\n* `1` — возвращать только друзей текущего пользователя в порядке убывания времени добавления объекта. \nЕсли метод был вызван без авторизации или параметр не был задан, то считается, что он равен `0`.\n\n",
            type: "integer",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — возвращать расширенную информацию о пользователях и сообществах из списка поставивших отметку «Мне нравится» или сделавших репост. По умолчанию — `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, относительно начала списка, для выборки определенного подмножества. Если параметр не задан, то считается, что он равен `0`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество возвращаемых идентификаторов пользователей.\nЕсли параметр не задан, то считается, что он равен 100, если не задан параметр `friends_only`, в противном случае 10.\nМаксимальное значение параметра 1000, если не задан параметр `friends_only`, в противном случае 100.",
            type: "positive",
            is_required: false,
          },
          {
            name: "skip_own",
            description: "Не возвращать самого пользователя.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "likes.isLiked",
        description:
          "Проверяет, находится ли объект в списке **Мне нравится** заданного пользователя.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, у которого необходимо проверить наличие объекта в списке «Мне нравится». Если параметр не задан, то считается, что он равен идентификатору текущего пользователя.",
            type: "positive",
            is_required: false,
          },
          {
            name: "type",
            description:
              "Тип объекта. \nВозможные типы:\n* `post` — запись на стене пользователя или группы;\n\n* `comment` — комментарий к записи на стене;\n\n* `photo` — фотография;\n\n* `audio` — аудиозапись;\n\n* `video` — видеозапись;\n\n* `note` — заметка;\n\n* `photo_comment` — комментарий к фотографии;\n\n* `video_comment` — комментарий к видеозаписи;\n\n* `topic_comment` — комментарий в обсуждении.",
            type: "string",
            is_required: true,
          },
          {
            name: "owner_id",
            description:
              "Идентификатор владельца Like-объекта. Если параметр не задан, то считается, что он равен идентификатору текущего пользователя.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1)",
            type: "integer",
            is_required: false,
          },
          {
            name: "item_id",
            description: "Идентификатор объекта.",
            type: "positive",
            is_required: true,
          },
        ],
      },
    ],
  },
  {
    title: "Market",
    methods: [
      {
        title: "market.add",
        description: "Добавляет новый товар.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товара.\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "name",
            description:
              "Название товара. Ограничение по длине считается в кодировке `cp1251`.",
            type: "string",
            is_required: true,
          },
          {
            name: "description",
            description: "Описание товара.",
            type: "text",
            is_required: true,
          },
          {
            name: "category_id",
            description: "Идентификатор категории товара.",
            type: "positive",
            is_required: false,
          },
          {
            name: "price",
            description: "Цена товара.",
            type: "string",
            is_required: false,
          },
          {
            name: "old_price",
            description: "Старая цена товара.",
            type: "string",
            is_required: false,
          },
          {
            name: "deleted",
            description:
              "Статус товара (`1` — товар удалён, `0` — товар не удалён).",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "main_photo_id",
            description:
              "Идентификатор фотографии обложки товара.\n\nФотография должна быть загружена с помощью метода [photos.getMarketUploadServer](method/photos.getMarketUploadServer), передав параметр `main_photo`. См. [подробную информацию](api/upload#Загрузка%20фотографии%20для%20товара) о загрузке фотографии товаров.",
            type: "positive",
            is_required: false,
          },
          {
            name: "photo_ids",
            description:
              "Идентификаторы дополнительных фотографий товара.\n\nФотография должна быть загружена с помощью метода [photos.getMarketUploadServer](method/photos.getMarketUploadServer). См. [подробную информацию](api/upload#Загрузка%20фотографии%20для%20товара) о загрузке фотографии товаров.",
            type: "string",
            is_required: false,
          },
          {
            name: "url",
            description: "Ссылка на сайт товара.",
            type: "string",
            is_required: false,
          },
          {
            name: "dimension_width",
            description: "Ширина в миллиметрах.",
            type: "positive",
            is_required: false,
          },
          {
            name: "dimension_height",
            description: "Высота в миллиметрах.",
            type: "positive",
            is_required: false,
          },
          {
            name: "dimension_length",
            description: "Глубина в миллиметрах.",
            type: "positive",
            is_required: false,
          },
          {
            name: "weight",
            description: "Вес в граммах.",
            type: "positive",
            is_required: false,
          },
          {
            name: "sku",
            description: "Артикул товара, произвольная строка.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "market.addAlbum",
        description: "Добавляет новую подборку с товарами.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца подборки.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "title",
            description: "Название подборки.",
            type: "string",
            is_required: true,
          },
          {
            name: "photo_id",
            description:
              "Идентификатор фотографии-обложки подборки.\n\nФотография должна быть загружена с помощью метода [photos.getMarketAlbumUploadServer](method/photos.getMarketAlbumUploadServer). См. [подробную информацию](api/upload#Загрузка%20фотографии%20для%20товара) о загрузке фотографии товаров.",
            type: "positive",
            is_required: false,
          },
          {
            name: "main_album",
            description:
              "Назначить подборку основной (`1` — назначить, `0` — нет).",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "is_hidden",
            description: "Сделать подборку скрытой.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "market.addToAlbum",
        description: "Добавляет товар в одну или несколько выбранных подборок.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товара.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "item_id",
            description: "Идентификатор товара.",
            type: "positive",
            is_required: false,
          },
          {
            name: "item_ids",
            description:
              "Идентификаторы товаров, если нужно добавить сразу несколько.",
            type: "string",
            is_required: false,
          },
          {
            name: "album_ids",
            description:
              "Идентификаторы подборок, в которые нужно добавить товар.",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "market.createComment",
        description: "Создаёт новый комментарий к товару.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товара.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "item_id",
            description: "Идентификатор товара.",
            type: "positive",
            is_required: true,
          },
          {
            name: "message",
            description:
              "Текст комментария (является обязательным, если не задан параметр `attachments`).",
            type: "string",
            is_required: false,
          },
          {
            name: "attachments",
            description:
              'Список объектов, приложенных к комментарию и разделённых символом ",". Поле **attachments** представляется в формате:\n\n```\n<type><owner_id>_<media_id>,<type><owner_id>_<media_id>\n```\n\n`<type>` — тип медиа-вложения:\n* `photo` — фотография \n* `video` — видеозапись \n* `audio` — аудиозапись \n* `doc` — документ\n\n`<owner_id>` — идентификатор владельца медиа-вложения \n`<media_id>` — идентификатор медиа-вложения. \n\nНапример:\n\n```\nphoto100172_166443618,photo66748_265827614\n```\n\nПараметр является обязательным, если не задан параметр `message`.',
            type: "string",
            is_required: false,
          },
          {
            name: "from_group",
            description:
              "`1` — комментарий будет опубликован от имени группы, `0` — комментарий будет опубликован от имени пользователя (по умолчанию).",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "reply_to_comment",
            description:
              "Идентификатор комментария, в ответ на который должен быть добавлен новый комментарий.",
            type: "positive",
            is_required: false,
          },
          {
            name: "sticker_id",
            description: "Идентификатор стикера.",
            type: "positive",
            is_required: false,
          },
          {
            name: "guid",
            description:
              "Уникальный идентификатор, предназначенный для предотвращения повторной отправки одинакового комментария.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "market.delete",
        description: "Удаляет товар.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товара.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "item_id",
            description: "Идентификатор товара.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "market.deleteAlbum",
        description: "Удаляет подборку с товарами.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца подборки.\n\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "album_id",
            description: "Идентификатор подборки.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "market.deleteComment",
        description: "Удаляет комментарий к товару.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товара.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "comment_id",
            description: "Идентификатор комментария.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "market.edit",
        description: "Редактирует товар.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товара.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "item_id",
            description: "Идентификатор товара.",
            type: "positive",
            is_required: true,
          },
          {
            name: "name",
            description: "Новое название товара.",
            type: "string",
            is_required: false,
          },
          {
            name: "description",
            description: "Новое описание товара.",
            type: "text",
            is_required: false,
          },
          {
            name: "category_id",
            description: "Идентификатор категории товара.",
            type: "positive",
            is_required: false,
          },
          {
            name: "price",
            description: "Цена товара.",
            type: "string",
            is_required: false,
          },
          {
            name: "old_price",
            description: "Старая цена.",
            type: "string",
            is_required: false,
          },
          {
            name: "deleted",
            description:
              "Статус товара (`1` — товар недоступен, `0` — товар доступен).",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "main_photo_id",
            description:
              "Идентификатор фотографии для обложки товара.\n\nФотография может быть загружена с помощью метода [photos.getMarketUploadServer](method/photos.getMarketUploadServer) (параметр `main_photo`). См. [подробную информацию](api/upload#Загрузка%20фотографии%20для%20товара) о загрузке фотографии товаров. \n\nИдентификатор фотографии может быть также получен методами [market.get](market.get) или [market.getById](market.getById) (если вы хотите использовать существующую фотографию товара).",
            type: "positive",
            is_required: false,
          },
          {
            name: "photo_ids",
            description:
              "Идентификаторы дополнительных фотографией товара.\n\nФотография должна быть загружена с помощью метода [photos.getMarketUploadServer](method/photos.getMarketUploadServer). См. [подробную информацию](api/upload#Загрузка%20фотографии%20для%20товара) о загрузке фотографии товаров.",
            type: "string",
            is_required: false,
          },
          {
            name: "url",
            description: "Ссылка на сайт товара.",
            type: "string",
            is_required: false,
          },
          {
            name: "dimension_width",
            description: "Ширина в миллиметрах.",
            type: "positive",
            is_required: false,
          },
          {
            name: "dimension_height",
            description: "Высота в миллиметрах.",
            type: "positive",
            is_required: false,
          },
          {
            name: "dimension_length",
            description: "Глубина в миллиметрах.",
            type: "positive",
            is_required: false,
          },
          {
            name: "weight",
            description: "Вес в граммах.",
            type: "positive",
            is_required: false,
          },
          {
            name: "sku",
            description: "Артикул товара, произвольная строка.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "market.editAlbum",
        description: "Редактирует подборку с товарами.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца подборки.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "album_id",
            description: "Идентификатор подборки.",
            type: "positive",
            is_required: true,
          },
          {
            name: "title",
            description: "Название подборки.",
            type: "string",
            is_required: true,
          },
          {
            name: "photo_id",
            description:
              "Идентификатор фотографии-обложки подборки.\n\nФотография должна быть загружена с помощью метода . См. [подробную информацию](api/upload) о загрузке фотографии товаров.",
            type: "positive",
            is_required: false,
          },
          {
            name: "main_album",
            description:
              "Назначить подборку основной (`1` — назначить, `0` — нет).",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "is_hidden",
            description: "",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "market.editComment",
        description: "Изменяет текст комментария к товару.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товара.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "comment_id",
            description: "Идентификатор комментария.",
            type: "positive",
            is_required: true,
          },
          {
            name: "message",
            description:
              "Новый текст комментария (является обязательным, если не задан параметр `attachments`).\n\nМаксимальное количество символов: 2048.",
            type: "string",
            is_required: false,
          },
          {
            name: "attachments",
            description:
              "Новый список объектов, приложенных к комментарию и разделённых символом «,». Поле `attachments` представляется в формате:\n\n```\n<type><owner_id>_<media_id>,<type><owner_id>_<media_id>\n```\n\n`<type>` — тип медиа-вложения:\n* `photo` — фотография \n* `video` — видеозапись \n* `audio` — аудиозапись \n* `doc` — документ\n\n`<owner_id>` — идентификатор владельца медиа-вложения \n`<media_id>` — идентификатор медиа-вложения. \n\nНапример:\n\n```\nphoto100172_166443618,photo66748_265827614\n```\n\nПараметр является обязательным, если не задан параметр `message`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "market.editOrder",
        description: "Редактирует заказ.",
        access_rights: ["market"],
        params: [
          {
            name: "user_id",
            description: "Идентификатор пользователя.",
            type: "integer",
            is_required: true,
          },
          {
            name: "order_id",
            description: "Идентификатор заказа.",
            type: "positive",
            is_required: true,
          },
          {
            name: "merchant_comment",
            description: "Комментарий продавца.",
            type: "string",
            is_required: false,
          },
          {
            name: "status",
            description:
              "Статус заказа. Возможные значения:\n\n*  `0` - новый;\n*  `1` - согласуется;\n*  `2` - собирается;\n*  `3` - доставляется;\n*  `4` - выполнен;\n*  `5` - отменен;\n*  `6` - возвращен.",
            type: "positive",
            is_required: false,
          },
          {
            name: "track_number",
            description: "Трек-номер.",
            type: "string",
            is_required: false,
          },
          {
            name: "payment_status",
            description:
              "Статус платежа. Возможные значения:\n\n*  `not_paid` - не оплачен;\n*  `paid` - оплачен;\n*  `returned` - возвращен.",
            type: "string",
            is_required: false,
          },
          {
            name: "delivery_price",
            description: "Стоимость доставки.",
            type: "positive",
            is_required: false,
          },
          {
            name: "width",
            description: "Ширина.",
            type: "positive",
            is_required: false,
          },
          {
            name: "length",
            description: "Длина.",
            type: "positive",
            is_required: false,
          },
          {
            name: "height",
            description: "Высота.",
            type: "positive",
            is_required: false,
          },
          {
            name: "weight",
            description: "Вес.",
            type: "positive",
            is_required: false,
          },
          {
            name: "comment_for_user",
            description: "Комментарий для пользователя.",
            type: "string",
            is_required: false,
          },
          {
            name: "receipt_link",
            description: "Ссылка на электронный чек.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "market.get",
        description: "Возвращает список товаров в сообществе.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товаров.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "album_id",
            description:
              "Идентификатор подборки, товары из которой нужно вернуть.",
            type: "string",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество возвращаемых товаров.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение относительно первого найденного товара для выборки определенного подмножества.",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — будут возвращены дополнительные поля `likes`, `can_comment`, `can_repost`, `photos`, `views_count`. По умолчанию эти поля не возвращается.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "date_from",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "date_to",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "need_variants",
            description: "",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "with_disabled",
            description: "",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "market.getAlbumById",
        description: "Возвращает данные подборки с товарами.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца подборки.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "album_ids",
            description:
              "Идентификаторы подборок, данные о которых нужно получить.",
            type: "string",
            is_required: true,
          },
          {
            name: "need_all_item_ids",
            description: "",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "market.getAlbums",
        description: "Возвращает список подборок с товарами.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товаров.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "offset",
            description:
              "Смещение относительно первой найденной подборки для выборки определенного подмножества.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество возвращаемых подборок.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "market.getById",
        description: "Возвращает информацию о товарах по идентификаторам.",
        access_rights: ["market"],
        params: [
          {
            name: "item_ids",
            description:
              "Перечисленные через запятую идентификаторы — идущие через знак подчеркивания `id` владельцев товаров и `id` самих товаров. Если товар принадлежит сообществу, то в качестве первого параметра используется `-id` сообщества.\n\nПример значения `item_ids`:\n\n```\n-4363_136089719,13245770_137352259\n```",
            type: "string",
            is_required: true,
          },
          {
            name: "extended",
            description:
              "`1` — будут возвращены дополнительные поля `likes`, `can_comment`, `can_repost`, `photos`, `views_count`. По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "market.getCategories",
        description: "Возвращает список категорий для товаров.",
        access_rights: ["market"],
        params: [
          {
            name: "count",
            description:
              "Количество категорий, информацию о которых необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества категорий.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "market.getComments",
        description: "Возвращает список комментариев к товару.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товара.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "item_id",
            description: "Идентификатор товара.",
            type: "positive",
            is_required: true,
          },
          {
            name: "need_likes",
            description: "`1` — возвращать информацию о лайках.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "start_comment_id",
            description:
              "Идентификатор комментария, начиная с которого нужно вернуть список (подробности см. ниже).",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Сдвиг, необходимый для получения конкретной выборки результатов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Число комментариев, которые необходимо получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "sort",
            description:
              "Порядок сортировки комментариев (`asc` — от старых к новым, `desc` - от новых к старым).",
            type: "string",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — комментарии в ответе будут возвращены в виде пронумерованных объектов, дополнительно будут возвращены списки объектов `profiles`, `groups`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).\n\nДоступные значения: \n* `sex`; \n* `bdate`; \n* `city`; \n* `country`; \n* `photo_50`; \n* `photo_100`; \n* `photo_200_orig`; \n* `photo_200`; \n* `photo_400_orig`; \n* `photo_max`; \n* `photo_max_orig`; \n* `photo_id`; \n* `online`; \n* `online_mobile`; \n* `domain`; \n* `has_mobile`; \n* `contacts`; \n* `connections`; \n* `site`; \n* `education`; \n* `universities`; \n* `schools`; \n* `can_post`; \n* `can_see_all_posts`; \n* `can_see_audio`; \n* `can_write_private_message`; \n* `status`;\n* `last_seen`;\n* `common_count`;\n* `relation`;\n* `relatives`;\n* `counters`;\n* `screen_name`;\n* `maiden_name`;\n* `timezone`; \n* `occupation`;\n* `activities`;\n* `interests`;\n* `music`;\n* `movies`;\n* `tv`;\n* `books`;\n* `games`;\n* `about`;\n* `quotes`;\n* `personal`;\n* `friend_status`;\n* `military`;\n* `career`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "market.getGroupOrders",
        description: "Возвращает заказы сообщества.",
        access_rights: ["market"],
        params: [
          {
            name: "group_id",
            description: "Идентификатор или короткое имя сообщества.",
            type: "positive",
            is_required: true,
          },
          {
            name: "offset",
            description:
              "Смещение относительно первого найденного заказа для выборки определенного подмножества.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество возвращаемых заказов.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "market.getOrderById",
        description: "Возвращает заказ по идентификатору.",
        access_rights: ["market"],
        params: [
          {
            name: "user_id",
            description: "Идентификатор пользователя.",
            type: "positive",
            is_required: false,
          },
          {
            name: "order_id",
            description: "Идентификатор заказа.",
            type: "positive",
            is_required: true,
          },
          {
            name: "extended",
            description: "",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "market.getOrderItems",
        description: "Возвращает товары в заказе.",
        access_rights: ["market"],
        params: [
          {
            name: "user_id",
            description: "ID пользователя, который сделал заказ.",
            type: "positive",
            is_required: false,
          },
          {
            name: "order_id",
            description: "Идентификатор заказа.",
            type: "positive",
            is_required: true,
          },
          {
            name: "offset",
            description:
              "Смещение относительно первого найденного товара в заказе для выборки определенного подмножества.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество возвращаемых товаров в заказе.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "market.getOrders",
        description: "Возвращает заказы.",
        access_rights: ["market"],
        params: [
          {
            name: "offset",
            description:
              "Смещение относительно первого найденного заказа для выборки определенного подмножества.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Число заказов, которые необходимо получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` – вернуть в ответе дополнительное поле `groups` (`array`), содержащее список объектов [сообществ](reference/objects/group).",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "date_from",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "date_to",
            description: "",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "market.removeFromAlbum",
        description:
          "Удаляет товар из одной или нескольких выбранных подборок.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товара.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "item_id",
            description: "Идентификатор товара.",
            type: "positive",
            is_required: true,
          },
          {
            name: "album_ids",
            description:
              "Идентификаторы подборок, из которых нужно удалить товар.",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "market.reorderAlbums",
        description: "Изменяет положение подборки с товарами в списке.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца альбома.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "album_id",
            description: "Идентификатор подборки.",
            type: "integer",
            is_required: true,
          },
          {
            name: "before",
            description:
              "Идентификатор подборки, перед которой следует поместить текущую.",
            type: "positive",
            is_required: false,
          },
          {
            name: "after",
            description:
              "Идентификатор подборки, после которой следует поместить текущую.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "market.reorderItems",
        description: "Изменяет положение товара в подборке.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товара.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "album_id",
            description:
              "Идентификатор подборки, в которой находится товар. `0` — для сортировки общего списка товаров.",
            type: "integer",
            is_required: false,
          },
          {
            name: "item_id",
            description: "Идентификатор товара.",
            type: "positive",
            is_required: true,
          },
          {
            name: "before",
            description:
              "Идентификатор товара, перед которым следует поместить текущий.",
            type: "positive",
            is_required: false,
          },
          {
            name: "after",
            description:
              "Идентификатор товара, после которого следует поместить текущий.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "market.report",
        description: "Позволяет отправить жалобу на товар.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товаров.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "item_id",
            description: "Идентификатор товара",
            type: "positive",
            is_required: true,
          },
          {
            name: "reason",
            description:
              "Причина жалобы:\n*  `0` — спам;\n*  `1` — детская порнография;\n*  `2` — экстремизм;\n*  `3` — насилие;\n*  `4` — пропаганда наркотиков;\n*  `5` — материал для взрослых;\n*  `6` — оскорбление.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "market.reportComment",
        description: "Позволяет оставить жалобу на комментарий к товару.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товара.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "comment_id",
            description: "Идентификатор комментария.",
            type: "positive",
            is_required: true,
          },
          {
            name: "reason",
            description:
              "причина жалобы:\n*  `0` — спам;\n*  `1` — детская порнография;\n*  `2` — экстремизм;\n*  `3` — насилие;\n*  `4` — пропаганда наркотиков;\n*  `5` — материал для взрослых;\n*  `6` — оскорбление.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "market.restore",
        description: "Восстанавливает удаленный товар.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товара.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "item_id",
            description: "Идентификатор товара.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "market.restoreComment",
        description: "Восстанавливает удаленный комментарий к товару.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца товара.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "comment_id",
            description: "Идентификатор удаленного комментария.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "market.search",
        description: "Ищет товары в каталоге сообщества.",
        access_rights: ["market"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор сообщества, которому принадлежат товары.",
            type: "integer",
            is_required: true,
          },
          {
            name: "album_id",
            description:
              "Идентификатор подборки, товары из которой нужно вернуть.",
            type: "positive",
            is_required: false,
          },
          {
            name: "q",
            description:
              "Строка поискового запроса. Например, «зелёные тапочки».",
            type: "string",
            is_required: false,
          },
          {
            name: "price_from",
            description:
              "Минимальное значение цены товаров в сотых долях единицы валюты. Например, 100000.",
            type: "positive",
            is_required: false,
          },
          {
            name: "price_to",
            description:
              "Максимальное значение цены товаров  в сотых долях единицы валюты. Например, 1410000.",
            type: "positive",
            is_required: false,
          },
          {
            name: "sort",
            description:
              "Вид сортировки.  \n* `0` — пользовательская расстановка;\n* `1` — по дате добавления товара;\n* `2` — по цене;\n* `3` — по популярности.",
            type: "integer",
            is_required: false,
          },
          {
            name: "rev",
            description:
              "`0` — не использовать обратный порядок, `1` — использовать обратный порядок.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение относительно первого найденного товара для выборки определенного подмножества.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество возвращаемых товаров.",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — будут возвращены дополнительные поля `likes`, `can_comment`, `can_repost`, `photos`, `views_count`. По умолчанию эти поля не возвращается.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "status",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "need_variants",
            description: "",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "market.searchItems",
        description: "",
        access_rights: ["market"],
        params: [
          {
            name: "q",
            description: "",
            type: "string",
            is_required: true,
          },
          {
            name: "offset",
            description: "",
            type: "integer",
            is_required: false,
          },
          {
            name: "count",
            description: "",
            type: "positive",
            is_required: false,
          },
          {
            name: "category_id",
            description: "",
            type: "positive",
            is_required: false,
          },
          {
            name: "price_from",
            description: "",
            type: "positive",
            is_required: false,
          },
          {
            name: "price_to",
            description: "",
            type: "positive",
            is_required: false,
          },
          {
            name: "sort_by",
            description: "",
            type: "integer",
            is_required: false,
          },
          {
            name: "sort_direction",
            description: "",
            type: "integer",
            is_required: false,
          },
          {
            name: "country",
            description: "",
            type: "positive",
            is_required: false,
          },
          {
            name: "city",
            description: "",
            type: "positive",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Newsfeed",
    methods: [
      {
        title: "newsfeed.get",
        description:
          "Возвращает данные, необходимые для показа списка новостей для текущего пользователя.",
        access_rights: ["wall", "friends"],
        params: [
          {
            name: "filters",
            description:
              "Перечисленные через запятую названия списков новостей, которые необходимо получить. В данный момент поддерживаются следующие списки новостей:\n* `post` — новые записи со стен;\n* `photo` — новые фотографии;\n* `photo_tag` — новые отметки на фотографиях;\n* `wall_photo` — новые фотографии на стенах;\n* `friend` — новые друзья;\n* `note` — новые заметки;\n* `audio` — записи сообществ и друзей, содержащие аудиозаписи, а также новые аудиозаписи, добавленные ими;\n* `video` — новые видеозаписи.\n\nЕсли параметр не задан, то будут получены все возможные списки новостей.",
            type: "string",
            is_required: false,
          },
          {
            name: "return_banned",
            description:
              "`1` - включить в выдачу также скрытых из новостей пользователей. `0` - не возвращать скрытых пользователей.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "start_time",
            description:
              "Время в формате `unixtime`, начиная с которого следует получить новости для текущего пользователя.",
            type: "positive",
            is_required: false,
          },
          {
            name: "end_time",
            description:
              "Время в формате `unixtime`, до которого следует получить новости для текущего пользователя. Если параметр не задан, то он считается равным текущему времени.",
            type: "positive",
            is_required: false,
          },
          {
            name: "max_photos",
            description:
              "Максимальное количество фотографий, информацию о которых необходимо вернуть. По умолчанию: `5`, максимальное значение: `100`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "source_ids",
            description:
              "Перечисленные через запятую иcточники новостей, новости от которых необходимо получить.\n\nИдентификаторы пользователей можно указывать в форматах\n\n> `<uid>` или `u<uid>`\n\nгде `<uid>` — идентификатор друга пользователя.\n\nИдентификаторы сообществ можно указывать в форматах\n\n> `-<gid>` или `g<gid>`\n\nгде `<gid>` — идентификатор сообщества.\n\nПомимо этого параметр может принимать строковые значения:\n* `friends` — список друзей пользователя;\n* `groups` — список групп, на которые подписан текущий пользователь;\n* `pages` — список публичных страниц, на который подписан тeкущий пользователь;\n* `following` — список пользователей, на которых подписан текущий пользователь;\n* `list{идентификатор списка новостей}` — список новостей. Вы можете найти все списки новостей пользователя используя метод [newsfeed.getLists](method/newsfeed.getLists). \n\nЕсли параметр не задан, то считается, что он включает список всех друзей и групп пользователя, за исключением скрытых источников, которые можно получить методом [newsfeed.getBanned](method/newsfeed.getBanned).\n\nМаксимальное число символов — **5000**.",
            type: "string",
            is_required: false,
          },
          {
            name: "from",
            description:
              "Значение, полученное в поле `new_from` при последней загрузке новостей. Помогает избавляться от дубликатов при реализации автоподгрузки.",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Указывает, начиная с какого элемента в данном промежутке времени необходимо получить новости. По умолчанию `0`. Для автоподгрузки Вы можете использовать возвращаемый данным методом параметр `new_offset`.",
            type: "integer",
            is_required: false,
          },
          {
            name: "start_from",
            description:
              "Идентификатор, необходимый для получения следующей страницы результатов. Значение, необходимое для передачи в этом параметре, возвращается в поле ответа `next_from`.",
            type: "string",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Указывает, какое максимальное число новостей следует возвращать, но не более **100**. По умолчанию **50**.",
            type: "positive",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей для профилей и  групп, которые необходимо вернуть. См. [описание полей объекта user](reference/objects/user) и [описание полей объекта group](reference/objects/group).",
            type: "string",
            is_required: false,
          },
          {
            name: "section",
            description: "",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "newsfeed.getMentions",
        description:
          "Возвращает список записей пользователей на своих стенах, в которых упоминается указанный пользователь.",
        access_rights: ["wall"],
        params: [
          {
            name: "owner_id",
            description: "Идентификатор пользователя или сообщества.",
            type: "integer",
            is_required: false,
          },
          {
            name: "start_time",
            description:
              "Время в формате `unixtime` начиная с которого следует получать упоминания о пользователе.\nЕсли параметр не задан, то будут возвращены все упоминания о пользователе, если не задан параметр `end_time`, в противном случае упоминания с учетом параметра `end_time`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "end_time",
            description:
              "Время, в формате `unixtime`, до которого следует получать упоминания о пользователе.\nЕсли параметр не задан, то будут возвращены все упоминания о пользователе, если не задан параметр `start_time`, в противном случае упоминания с учетом параметра `start_time`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества новостей. По умолчанию **0**.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество возвращаемых записей. Если параметр не задан, то считается, что он равен **20**. Максимальное значение параметра **50**.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "newsfeed.getRecommended",
        description: "Получает список новостей, рекомендованных пользователю.",
        access_rights: ["wall", "friends"],
        params: [
          {
            name: "start_time",
            description:
              "Время в формате `unixtime`, начиная с которого следует получить новости для текущего пользователя. Если параметр не задан, то он считается равным значению времени, которое было сутки назад.",
            type: "positive",
            is_required: false,
          },
          {
            name: "end_time",
            description:
              "Время в формате `unixtime`, до которого следует получить новости для текущего пользователя. Если параметр не задан, то он считается равным текущему времени.",
            type: "positive",
            is_required: false,
          },
          {
            name: "max_photos",
            description:
              "Максимальное количество фотографий, информацию о которых необходимо вернуть. По умолчанию 5.",
            type: "positive",
            is_required: false,
          },
          {
            name: "from",
            description:
              "Значение, полученное в поле `new_from` при последней загрузке новостей. Помогает избавляться от дубликатов при реализации автоподгрузки.",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Указывает, начиная с какого элемента в данном промежутке времени необходимо получить новости. По умолчанию **0**. Для автоподгрузки Вы можете использовать возвращаемый данным методом параметр `new_offset`.",
            type: "integer",
            is_required: false,
          },
          {
            name: "start_from",
            description:
              "Идентификатор, необходимый для получения следующей страницы результатов. Значение, необходимое для передачи в этом параметре, возвращается в поле ответа `next_from`.",
            type: "string",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Указывает, какое максимальное число новостей следует возвращать, но не более **100**. По умолчанию **50**.",
            type: "positive",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).\nДоступные значения: \n* `sex`\n* `bdate`\n* `city` \n* `country` \n* `photo_50` \n* `photo_100` \n* `photo_200_orig`\n* `photo_200`\n* `photo_400_orig` \n* `photo_max`  \n* `photo_max_orig`  \n* `online`  \n* `online_mobile`  \n* `domain`  \n* `has_mobile`  \n* `contacts`  \n* `connections`  \n* `site`  \n* `education`  \n* `universities`  \n* `schools`  \n* `can_post`  \n* `can_see_all_posts`  \n* `can_see_audio`  \n* `can_write_private_message`  \n* `status`  \n* `last_seen`  \n* `common_count`  \n* `relation`  \n* `relatives`  \n* `counters`  \n* `screen_name`  \n* `maiden_name`  \n* `timezone`  \n* `occupation`  \n* `activities`  \n* `interests`  \n* `music`  \n* `movies`  \n* `tv`  \n* `books`  \n* `games`  \n* `about`\n* `quotes`",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "newsfeed.getSuggestedSources",
        description:
          "Возвращает сообщества и пользователей, на которые текущему пользователю рекомендуется подписаться.",
        access_rights: [],
        params: [
          {
            name: "offset",
            description:
              "Отступ, необходимый для выборки определенного подмножества сообществ или пользователей.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество сообществ или пользователей, которое необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
          {
            name: "shuffle",
            description: "Перемешивать ли возвращаемый список.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей, которые необходимо вернуть. См. [возможные поля для пользователей](reference/objects/user) и [сообществ](reference/objects/group).",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "newsfeed.search",
        description:
          "Возвращает результаты поиска по статусам. Новости возвращаются в порядке от более новых к более старым.",
        access_rights: [],
        params: [
          {
            name: "q",
            description: 'Поисковой запрос, например, "New Year".',
            type: "string",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1`, если необходимо получить информацию о пользователе или сообществе, разместившем запись. По умолчанию: `0`. ",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Указывает, какое максимальное число записей следует возвращать.\n\n> Обратите внимание — даже при использовании параметра `offset` для получения информации доступны только первые **1000** результатов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "latitude",
            description:
              "Географическая широта точки, в радиусе от которой необходимо производить поиск, заданная в градусах (от -90 до 90).",
            type: "string",
            is_required: false,
          },
          {
            name: "longitude",
            description:
              "Географическая долгота точки, в радиусе от которой необходимо производить поиск, заданная в градусах (от -180 до 180).",
            type: "string",
            is_required: false,
          },
          {
            name: "start_time",
            description:
              "Время в формате `unixtime`, начиная с которого следует получить новости для текущего пользователя. Если параметр не задан, то он считается равным значению времени, которое было сутки назад.",
            type: "positive",
            is_required: false,
          },
          {
            name: "end_time",
            description:
              "Время в формате `unixtime`, до которого следует получить новости для текущего пользователя. Если параметр не задан, то он считается равным текущему времени.",
            type: "positive",
            is_required: false,
          },
          {
            name: "start_id",
            description:
              "Строковый идентификатор последней полученной записи (возвращается в результатах запроса (`new_from`) для того, чтобы исключить из выборки нового запроса уже полученные записи).",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества результатов поиска.",
            type: "positive",
            is_required: false,
          },
          {
            name: "start_from",
            description:
              "Идентификатор, необходимый для получения следующей страницы результатов. Значение, необходимое для передачи в этом параметре, возвращается в поле ответа `next_from`.",
            type: "string",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей для профилей и  групп, которые необходимо вернуть. См. [описание полей объекта user](reference/objects/user) и [описание полей объекта group](reference/objects/group).\n\nОбратите внимание, этот параметр учитывается только при `extended`=`1`.",
            type: "string",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Notes",
    methods: [
      {
        title: "notes.add",
        description: "Создает новую заметку у текущего пользователя.",
        access_rights: ["notes"],
        params: [
          {
            name: "title",
            description: "Заголовок заметки.",
            type: "string",
            is_required: true,
          },
          {
            name: "text",
            description: "Текст заметки.",
            type: "string",
            is_required: true,
          },
          {
            name: "privacy",
            description:
              "Уровень доступа к заметке. \nВозможные значения:\n* `0` — все пользователи, \n* `1` — только друзья, \n* `2` — друзья и друзья друзей, \n* `3` — только пользователь.",
            type: "integer",
            is_required: false,
          },
          {
            name: "comment_privacy",
            description:
              "Уровень доступа к комментированию заметки. \nВозможные значения:\n* `0` — все пользователи,\n* `1` — только друзья, \n* `2` — друзья и друзья друзей, \n* `3` — только пользователь.",
            type: "integer",
            is_required: false,
          },
          {
            name: "privacy_view",
            description:
              "Настройки приватности просмотра заметки в [специальном формате](api/privacy).",
            type: "string",
            is_required: false,
          },
          {
            name: "privacy_comment",
            description:
              "Настройки приватности комментирования заметки в [специальном формате](api/privacy).",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "notes.delete",
        description: "Удаляет заметку текущего пользователя.",
        access_rights: ["notes"],
        params: [
          {
            name: "note_id",
            description: "Идентификатор заметки.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "notes.edit",
        description: "Редактирует заметку текущего пользователя.",
        access_rights: ["notes"],
        params: [
          {
            name: "note_id",
            description: "Идентификатор заметки.",
            type: "positive",
            is_required: true,
          },
          {
            name: "title",
            description: "Заголовок заметки.",
            type: "string",
            is_required: true,
          },
          {
            name: "text",
            description: "Текст заметки.",
            type: "string",
            is_required: true,
          },
          {
            name: "privacy",
            description:
              "Уровень доступа к заметке. \nВозможные значения:\n* `0` — все пользователи, \n* `1` — только друзья, \n* `2` — друзья и друзья друзей, \n* `3` — только пользователь.",
            type: "integer",
            is_required: false,
          },
          {
            name: "comment_privacy",
            description:
              "Уровень доступа к комментированию заметки.\nВозможные значения:\n* `0` — все пользователи, \n* `1` — только друзья, \n* `2` — друзья и друзья друзей, \n* `3` — только пользователь.",
            type: "integer",
            is_required: false,
          },
          {
            name: "privacy_view",
            description:
              "Настройки приватности просмотра заметки в [специальном формате](api/privacy).",
            type: "string",
            is_required: false,
          },
          {
            name: "privacy_comment",
            description:
              "Настройки приватности комментирования заметки в [специальном формате](api/privacy).",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "notes.get",
        description: "Возвращает список заметок, созданных пользователем.",
        access_rights: ["notes"],
        params: [
          {
            name: "note_ids",
            description:
              "Идентификаторы заметок, информацию о которых необходимо получить.",
            type: "string",
            is_required: false,
          },
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, информацию о заметках которого требуется получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества заметок.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество заметок, информацию о которых необходимо получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "sort",
            description:
              "Сортировка результатов (`0` — по дате создания в порядке убывания, `1` - по дате создания в порядке возрастания).",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "notes.getById",
        description: "Возвращает заметку по её `id`.",
        access_rights: ["notes"],
        params: [
          {
            name: "note_id",
            description: "Идентификатор заметки.",
            type: "positive",
            is_required: true,
          },
          {
            name: "owner_id",
            description: "Идентификатор владельца заметки.",
            type: "positive",
            is_required: false,
          },
          {
            name: "need_wiki",
            description:
              "Определяет, требуется ли в ответе wiki-представление заметки (работает, только если запрашиваются заметки текущего пользователя).",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "notes.getComments",
        description: "Возвращает список комментариев к заметке.",
        access_rights: ["notes"],
        params: [
          {
            name: "note_id",
            description: "Идентификатор заметки.",
            type: "positive",
            is_required: true,
          },
          {
            name: "owner_id",
            description: "Идентификатор владельца заметки.",
            type: "positive",
            is_required: false,
          },
          {
            name: "sort",
            description:
              "Сортировка результатов (`0` — по дате добавления в порядке возрастания, `1` — по дате добавления в порядке убывания).",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества комментариев.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество комментариев, которое необходимо получить.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "notes.getFriendsNotes",
        description: "Возвращает список заметок друзей пользователя.",
        access_rights: ["notes"],
        params: [
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества заметок.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество заметок, информацию о которых необходимо получить.",
            type: "positive",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Notifications",
    methods: [
      {
        title: "notifications.get",
        description:
          "Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.",
        access_rights: ["notifications"],
        params: [
          {
            name: "count",
            description:
              "Указывает, какое максимальное число оповещений следует возвращать.",
            type: "positive",
            is_required: false,
          },
          {
            name: "from",
            description:
              "Строковый идентификатор последнего полученного предыдущим вызовом метода оповещения (см. описание поля `new_from` в результате).",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для получения определенного подмножества оповещений.",
            type: "positive",
            is_required: false,
          },
          {
            name: "start_from",
            description:
              "Строковый идентификатор оповещения, полученного последним в предыдущем вызове (см. описание поля `next_from` в результате).",
            type: "string",
            is_required: false,
          },
          {
            name: "filters",
            description:
              "перечисленные через запятую типы оповещений, которые необходимо получить. Возможные значения:\n* `wall` — записи на стене пользователя;\n* `mentions` — упоминания в записях на стене, в комментариях или в обсуждениях;\n* `comments` — комментарии к записям на стене, фотографиям и видеозаписям;\n* `likes` — отметки «Мне нравится»;\n* `reposts` — скопированные у текущего пользователя записи на стене, фотографии и видеозаписи;\n* `followers` — новые подписчики;\n* `friends` — принятые заявки в друзья.\nЕсли параметр не задан, то будут получены все возможные типы оповещений.",
            type: "string",
            is_required: false,
          },
          {
            name: "start_time",
            description:
              "Время в формате `unixtime`, начиная с которого следует получить оповещения для текущего пользователя. Если параметр не задан, то он считается равным значению времени, которое было сутки назад.",
            type: "integer",
            is_required: false,
          },
          {
            name: "end_time",
            description:
              "Время в формате `unixtime`, до которого следует получить оповещения для текущего пользователя. Если параметр не задан, то он считается равным текущему времени.",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "notifications.markAsViewed",
        description:
          "Сбрасывает счетчик непросмотренных оповещений об ответах других пользователей на записи текущего пользователя.",
        access_rights: ["notifications"],
        params: [],
      },
      {
        title: "notifications.sendMessage",
        description:
          "Отправляет уведомление пользователю приложения Mini Apps.",
        access_rights: [],
        params: [
          {
            name: "user_ids",
            description:
              "Список идентификаторов пользователей, которым нужно отправить уведомление (максимум **100** идентификаторов).",
            type: "string",
            is_required: true,
          },
          {
            name: "message",
            description: "Текст уведомления.",
            type: "string",
            is_required: true,
          },
          {
            name: "fragment",
            description:
              "Содержимое хэша (часть URL в ссылке на приложение вида `vk.com/app123456#fragment`).",
            type: "string",
            is_required: false,
          },
          {
            name: "group_id",
            description: "",
            type: "positive",
            is_required: false,
          },
          {
            name: "random_id",
            description:
              "Уникальный (в привязке к `API_ID` и `ID` отправителя) идентификатор, предназначенный для предотвращения повторной отправки одинакового сообщения.  \n\nЗаданный `random_id` используется для проверки уникальности уведомления в течение часа после отправки.",
            type: "integer",
            is_required: false,
          },
          {
            name: "sending_mode",
            description: "",
            type: "string",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Orders",
    methods: [
      {
        title: "orders.cancelSubscription",
        description: "Отменяет подписку.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description: "Идентификатор пользователя.",
            type: "positive",
            is_required: true,
          },
          {
            name: "subscription_id",
            description: "Идентификатор подписки.",
            type: "positive",
            is_required: true,
          },
          {
            name: "pending_cancel",
            description:
              "`1` — отключить подписку по истечении текущего оплаченного периода;\n`0` — отключить подписку сразу.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "orders.changeState",
        description: "Изменяет состояние заказа.",
        access_rights: [],
        params: [
          {
            name: "order_id",
            description: "Идентификатор заказа.",
            type: "positive",
            is_required: true,
          },
          {
            name: "action",
            description:
              "Действие, которое нужно произвести с заказом. \n\nВозможные действия:\n* `cancel` — отменить неподтверждённый заказ.\n* `charge` — подтвердить неподтверждённый заказ. Применяется только если не удалось обработать уведомление [order_change_state](api/payments/notifications/order-status-change).\n* `refund` — отменить подтверждённый заказ.",
            type: "string",
            is_required: true,
          },
          {
            name: "app_order_id",
            description: "Внутренний идентификатор заказа в приложении.",
            type: "positive",
            is_required: false,
          },
          {
            name: "test_mode",
            description:
              "Если этот параметр равен `1`, изменяется состояние заказа [тестового режима](api/payments/getting-started). По умолчанию `0`.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "orders.get",
        description: "Возвращает список заказов.",
        access_rights: [],
        params: [
          {
            name: "offset",
            description:
              "Смещение относительно самого нового найденного заказа для выборки определенного подмножества. По умолчанию `0`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество возвращаемых заказов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "test_mode",
            description:
              "Если этот параметр равен `1`, возвращается список заказов [тестового режима](api/payments/getting-started). По умолчанию `0`.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "orders.getAmount",
        description: "Возвращает стоимость голосов в валюте пользователя.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description: "Идентификатор пользователя.",
            type: "positive",
            is_required: true,
          },
          {
            name: "votes",
            description: "Список голосов. \nНапример: `1`, `7`, `77`.",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "orders.getById",
        description: "Возвращает информацию об отдельном заказе.",
        access_rights: [],
        params: [
          {
            name: "order_id",
            description: "Идентификатор заказа.",
            type: "positive",
            is_required: false,
          },
          {
            name: "order_ids",
            description:
              "Идентификаторы заказов (при запросе информации о нескольких заказах).",
            type: "string",
            is_required: false,
          },
          {
            name: "test_mode",
            description:
              "Если этот параметр равен `1`, возвращаются заказы [тестового режима](api/payments/getting-started). По умолчанию `0`.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "orders.getUserSubscriptionById",
        description: "Получает информацию о подписке по её идентификатору.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description: "Идентификатор пользователя.",
            type: "positive",
            is_required: true,
          },
          {
            name: "subscription_id",
            description: "Идентификатор подписки.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "orders.getUserSubscriptions",
        description: "Получает список активных подписок пользователя.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, подписки которого необходимо получить.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "orders.updateSubscription",
        description: "Обновляет цену подписки для пользователя.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description: "Идентификатор пользователя.",
            type: "positive",
            is_required: true,
          },
          {
            name: "subscription_id",
            description:
              "Идентификатор подписки. Подписка должна быть активна.",
            type: "positive",
            is_required: true,
          },
          {
            name: "price",
            description:
              "Новая стоимость подписки (должна быть ниже, чем текущая).",
            type: "positive",
            is_required: true,
          },
        ],
      },
    ],
  },
  {
    title: "Pages",
    methods: [
      {
        title: "pages.clearCache",
        description:
          "Позволяет очистить кеш отдельных внешних страниц, которые могут быть прикреплены к записям ВКонтакте. После очистки кеша при последующем прикреплении ссылки к записи, данные о странице будут обновлены.",
        access_rights: [],
        params: [
          {
            name: "url",
            description:
              "Адрес страницы, закешированную версию которой необходимо очистить. ",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "pages.get",
        description: "Возвращает информацию о вики-странице.",
        access_rights: ["pages"],
        params: [
          {
            name: "owner_id",
            description: "Идентификатор владельца вики-страницы.",
            type: "string",
            is_required: false,
          },
          {
            name: "page_id",
            description: "Идентификатор вики-страницы.",
            type: "integer",
            is_required: false,
          },
          {
            name: "global",
            description:
              "`1` — требуется получить информацию о глобальной вики-странице.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "site_preview",
            description:
              "`1` — получаемая вики-страница является предпросмотром для прикреплённой ссылки.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "title",
            description: "Название страницы.",
            type: "string",
            is_required: false,
          },
          {
            name: "need_source",
            description:
              "`1` —  требуется вернуть содержимое страницы в вики-формате.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "need_html",
            description:
              "`1` —  требуется вернуть HTML-представление страницы.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "pages.getHistory",
        description: "Возвращает список всех старых версий вики-страницы.",
        access_rights: ["pages"],
        params: [
          {
            name: "page_id",
            description: "Идентификатор вики-страницы.",
            type: "integer",
            is_required: true,
          },
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, которому принадлежит вики-страница.",
            type: "integer",
            is_required: false,
          },
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, создавшего вики-страницу.",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "pages.getTitles",
        description: "Возвращает список вики-страниц в группе.",
        access_rights: ["pages"],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, которому принадлежит вики-страница.",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "pages.getVersion",
        description: "Возвращает текст одной из старых версий страницы.",
        access_rights: [],
        params: [
          {
            name: "version_id",
            description: "Идентификатор версии.",
            type: "integer",
            is_required: true,
          },
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, которому принадлежит вики-страница.",
            type: "integer",
            is_required: false,
          },
          {
            name: "user_id",
            description: "Идентификатор пользователя, который создал страницу.",
            type: "integer",
            is_required: false,
          },
          {
            name: "need_html",
            description:
              "Определяет, требуется ли в ответе HTML-представление вики-страницы.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "pages.parseWiki",
        description: "Возвращает HTML-представление вики-разметки.",
        access_rights: ["photos"],
        params: [
          {
            name: "text",
            description: "Текст в вики-формате.",
            type: "text",
            is_required: true,
          },
          {
            name: "group_id",
            description: "",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "pages.preview",
        description: "",
        access_rights: ["pages"],
        params: [
          {
            name: "Text",
            description: "",
            type: "text",
            is_required: false,
          },
          {
            name: "pid",
            description: "",
            type: "integer",
            is_required: false,
          },
          {
            name: "gid",
            description: "",
            type: "integer",
            is_required: false,
          },
          {
            name: "mid",
            description: "",
            type: "integer",
            is_required: false,
          },
          {
            name: "need_source",
            description: "",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "pages.save",
        description: "Сохраняет текст вики-страницы.",
        access_rights: ["pages"],
        params: [
          {
            name: "text",
            description: "Новый текст страницы в вики-формате.",
            type: "text",
            is_required: false,
          },
          {
            name: "page_id",
            description:
              "Идентификатор вики-страницы. Вместо `page_id` может быть передан параметр `title`.",
            type: "integer",
            is_required: false,
          },
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, которому принадлежит вики-страница.",
            type: "integer",
            is_required: false,
          },
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, создавшего вики-страницу.",
            type: "integer",
            is_required: false,
          },
          {
            name: "title",
            description: "Название вики-страницы.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "pages.saveAccess",
        description:
          "Сохраняет новые настройки доступа на чтение и редактирование вики-страницы.",
        access_rights: ["pages"],
        params: [
          {
            name: "page_id",
            description: "Идентификатор вики-страницы.",
            type: "integer",
            is_required: true,
          },
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, которому принадлежит вики-страница.",
            type: "integer",
            is_required: false,
          },
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, создавшего вики-страницу.",
            type: "integer",
            is_required: false,
          },
          {
            name: "view",
            description:
              "Значение настройки доступа на чтение. Возможные значения:\n* `2` — просматривать страницу могут все;\n* `1` — только участники сообщества;\n* `0` — только руководители сообщества.",
            type: "integer",
            is_required: false,
          },
          {
            name: "edit",
            description:
              "Значение настройки доступа на редактирование. Возможные значения:\n* `2` — редактировать страницу могут все;\n* `1` — только участники сообщества;\n* `0` — только руководители сообщества.",
            type: "integer",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Photos",
    methods: [
      {
        title: "photos.createAlbum",
        description: "Создает пустой альбом для фотографий.",
        access_rights: ["photos"],
        params: [
          {
            name: "title",
            description: "Название альбома.",
            type: "string",
            is_required: true,
          },
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, в котором создаётся альбом.",
            type: "integer",
            is_required: false,
          },
          {
            name: "description",
            description: "Текст описания альбома.",
            type: "string",
            is_required: false,
          },
          {
            name: "privacy",
            description:
              "Уровень доступа к альбому (только для альбома пользователя). \nВозможные значения:\n* `0` — все пользователи,\n* `1` — только друзья,\n* `2` — друзья и друзья друзей,\n* `3` — только я.",
            type: "integer",
            is_required: false,
          },
          {
            name: "comment_privacy",
            description:
              "Уровень доступа к комментированию альбома (только для альбома пользователя).\nВозможные значения:\n* `0` — все пользователи,\n* `1` — только друзья,\n* `2` — друзья и друзья друзей,\n* `3` — только я.",
            type: "integer",
            is_required: false,
          },
          {
            name: "privacy_view",
            description:
              "Настройки приватности просмотра альбома в [специальном формате](reference/objects/privacy).",
            type: "string",
            is_required: false,
          },
          {
            name: "privacy_comment",
            description:
              "Настройки приватности комментирования альбома в [специальном формате](reference/objects/privacy).",
            type: "string",
            is_required: false,
          },
          {
            name: "upload_by_admins_only",
            description:
              "Кто может загружать фотографии в альбом (только для альбома сообщества). \nВозможные значения:\n*  `0` — фотографии могут добавлять все пользователи;\n*  `1` — фотографии могут добавлять только редакторы и администраторы.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "comments_disabled",
            description:
              "Отключено ли комментирование альбома (только для альбома сообщества).\nВозможные значения:\n*  `0` — комментирование включено;\n*  `1` — комментирование отключено.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.edit",
        description: "Редактирует описание или геометку у фотографии.",
        access_rights: ["photos"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит фотография.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
          {
            name: "photo_id",
            description: "Идентификатор фотографии.",
            type: "positive",
            is_required: true,
          },
          {
            name: "caption",
            description:
              "Новый текст описания к фотографии. Если параметр не задан, то считается, что он равен пустой строке.",
            type: "string",
            is_required: false,
          },
          {
            name: "latitude",
            description: "Географическая широта.",
            type: "string",
            is_required: false,
          },
          {
            name: "longitude",
            description: "Географическая долгота.",
            type: "string",
            is_required: false,
          },
          {
            name: "place_str",
            description: "Название места.",
            type: "string",
            is_required: false,
          },
          {
            name: "foursquare_id",
            description: "ID в Foursquare.",
            type: "string",
            is_required: false,
          },
          {
            name: "delete_place",
            description: "Удалить место (`0` — не удалять, `1` — удалить).",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.editAlbum",
        description: "Редактирует данные альбома для фотографий.",
        access_rights: ["photos"],
        params: [
          {
            name: "album_id",
            description: "Идентификатор альбома.",
            type: "integer",
            is_required: true,
          },
          {
            name: "title",
            description: "Новое название альбома.",
            type: "string",
            is_required: false,
          },
          {
            name: "description",
            description: "Новый текст описания альбома.",
            type: "string",
            is_required: false,
          },
          {
            name: "owner_id",
            description:
              "Идентификатор владельца альбома (пользователь или сообщество).\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
          {
            name: "privacy",
            description:
              "Новый уровень доступа к альбому (только для альбома пользователя). \nВозможные значения:\n*  `0` — все пользователи,\n*  `1` — только друзья,\n*  `2` — друзья и друзья друзей,\n*  `3` — только я.",
            type: "integer",
            is_required: false,
          },
          {
            name: "comment_privacy",
            description:
              "Новый уровень доступа к комментированию альбома (только для альбома пользователя).\nВозможные значения:\n*  `0` — все пользователи,\n*  `1` — только друзья,\n*  `2` — друзья и друзья друзей,\n*  `3` — только я.",
            type: "integer",
            is_required: false,
          },
          {
            name: "privacy_view",
            description:
              "Настройки приватности просмотра альбома в [специальном формате](reference/objects/privacy).",
            type: "string",
            is_required: false,
          },
          {
            name: "privacy_comment",
            description:
              "Настройки приватности комментирования альбома в [специальном формате](reference/objects/privacy).",
            type: "string",
            is_required: false,
          },
          {
            name: "upload_by_admins_only",
            description:
              "Кто может загружать фотографии в альбом (только для альбома сообщества). \nВозможные значения:\n*  `0` — фотографии могут добавлять все пользователи;\n*  `1` — фотографии могут добавлять только редакторы и администраторы.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "comments_disabled",
            description:
              "Отключено ли комментирование альбома (только для альбома сообщества).\nВозможные значения:\n*  `0` — комментирование включено;\n*  `1` — комментирование отключено.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.get",
        description: "Возвращает список фотографий в альбоме.",
        access_rights: [],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца альбома.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «-» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
          {
            name: "album_id",
            description:
              "Идентификатор альбома. Для служебных альбомов используются следующие идентификаторы:\n* `wall` — фотографии со стены,\n* `bridge` — фотографии профиля,\n* `saved` — сохраненные фотографии. Возвращается только с ключом доступа пользователя.",
            type: "string",
            is_required: false,
          },
          {
            name: "photo_ids",
            description:
              "Идентификаторы фотографий, информацию о которых необходимо вернуть.",
            type: "string",
            is_required: false,
          },
          {
            name: "rev",
            description:
              "Порядок сортировки фотографий. Возможные значения:\n* `1` — антихронологический,\n* `0` — хронологический.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — будут возвращены дополнительные поля `likes`, `comments`, `tags`, `can_comment`, `reposts`. По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "feed_type",
            description:
              "Тип новости, получаемый в поле `type` метода [newsfeed.get](method/newsfeed.get), для получения только загруженных пользователем фотографий, либо только фотографий, на которых он был отмечен. Может принимать значения `photo`, `photo_tag`.",
            type: "string",
            is_required: false,
          },
          {
            name: "feed",
            description:
              "Время в формате, который может быть получен методом [newsfeed.get](method/newsfeed.get) в поле `date`, для получения всех фотографий загруженных пользователем в определённый день либо на которых пользователь был отмечен. Также нужно указать параметр `uid` пользователя, с которым произошло событие.\n\nЗначение должно отличаться от текущего времени не более, чем на месяц.",
            type: "integer",
            is_required: false,
          },
          {
            name: "photo_sizes",
            description:
              "`1` — возвращать доступные размеры фотографии в [специальном формате](reference/objects/photo-sizes). По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Отступ, необходимый для получения определенного подмножества записей.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество записей, которое будет получено.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.getAlbums",
        description:
          "Возвращает список фотоальбомов пользователя или сообщества.",
        access_rights: [],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежат альбомы. \n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «-» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
          {
            name: "album_ids",
            description: "Перечисленные через запятую идентификаторы альбомов.",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества альбомов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество альбомов, которое нужно вернуть (по умолчанию возвращаются все альбомы).",
            type: "positive",
            is_required: false,
          },
          {
            name: "need_system",
            description:
              "`1` — будут возвращены системные альбомы, имеющие отрицательные идентификаторы.\n\nОбратите внимание, что информация о системных альбомах возвращается даже в том случае, если они не содержат фотографий.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "need_covers",
            description:
              "`1` — будет возвращено дополнительное поле `thumb_src` с адресом изображения-обложки. По умолчанию поле `thumb_src` не возвращается.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "photo_sizes",
            description:
              "`1` — размеры фотографий будут возвращены в [специальном формате](reference/objects/photo-sizes).",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.getAlbumsCount",
        description:
          "Возвращает количество доступных альбомов пользователя или сообщества.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, количество альбомов которого необходимо получить.",
            type: "integer",
            is_required: false,
          },
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, количество альбомов которого необходимо получить.",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.getAll",
        description:
          "Возвращает все фотографии пользователя или сообщества в антихронологическом порядке.",
        access_rights: ["photos"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, фотографии которого нужно получить.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — возвращать расширенную информацию о фотографиях.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества фотографий. По умолчанию — `0`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Число фотографий, информацию о которых необходимо получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "photo_sizes",
            description:
              "`1` — будут возвращены размеры фотографий в [специальном формате](reference/objects/photo-sizes).",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "no_service_albums",
            description:
              "`0` — вернуть все фотографии, включая находящиеся в сервисных альбомах, таких как «Фотографии на моей стене» (по умолчанию);\n`1` — вернуть фотографии только из стандартных альбомов пользователя или сообщества.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "need_hidden",
            description:
              "`1` — возвращает информацию от том, скрыта ли фотография из блока над стеной пользователя.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "skip_hidden",
            description:
              "`1` — не возвращать фотографии, скрытые из блока над стеной пользователя (параметр учитывается только при `owner_id` > `0`, параметр `no_service_albums` игнорируется).",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.getAllComments",
        description:
          "Возвращает отсортированный в антихронологическом порядке список всех комментариев к конкретному альбому или ко всем альбомам пользователя.",
        access_rights: ["photos"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежат фотографии.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
          {
            name: "album_id",
            description:
              "Идентификатор альбома. Если параметр не задан, то считается, что необходимо получить комментарии ко всем альбомам пользователя или сообщества.",
            type: "positive",
            is_required: false,
          },
          {
            name: "need_likes",
            description:
              "`1` — будет возвращено дополнительное поле `likes`. По умолчанию поле `likes` не возвращается.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества комментариев. Если параметр не задан, то считается, что он равен `0`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество комментариев, которое необходимо получить. Если параметр не задан, то считается что он равен **20**. Максимальное значение параметра **100**.\n\n> Обратите внимание, даже при использовании параметра `offset` для получения доступны только первые **10000** комментариев.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.getById",
        description:
          "Возвращает информацию о фотографиях по их идентификаторам.",
        access_rights: [],
        params: [
          {
            name: "photos",
            description:
              "Перечисленные через запятую идентификаторы, которые представляют собой идущие через знак подчеркивания `id` пользователей, разместивших фотографии, и `id` самих фотографий. Чтобы получить информацию о фотографии в альбоме группы, вместо id пользователя следует указать `-id` группы.\n\nПример значения `photos`: \n\n```\n1_263219656,6492_456239863, -1_456239099\n```\n\nНекоторые фотографии, идентификаторы которых могут быть получены через API, закрыты приватностью, и не будут получены. В этом случае следует использовать ключ доступа фотографии (`access_key`) в её идентификаторе. \n\nПример значения `photos`: \n\n```\n1_129207899_220df2876123d3542f, 6492_135055734_e0a9bcc31144f67fbd\n```\n\nПоле `access_key` будет возвращено вместе с остальными данными фотографии в методах, которые возвращают фотографии, закрытые приватностью но доступные в данном контексте. Например данное поле имеют фотографии, возвращаемые методом [newsfeed.get](newsfeed.get).",
            type: "string",
            is_required: true,
          },
          {
            name: "extended",
            description:
              "`1` — будут возвращены дополнительные поля `likes`, `comments`, `tags`, `can_comment`, `can_repost`. Поля `comments` и `tags` содержат только количество объектов. По умолчанию данные поля не возвращается.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "photo_sizes",
            description:
              "Возвращать ли доступные размеры фотографии в [специальном формате](reference/objects/photo-sizes).",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.getComments",
        description: "Возвращает список комментариев к фотографии.",
        access_rights: ["photos"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит фотография.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
          {
            name: "photo_id",
            description: "Идентификатор фотографии.",
            type: "integer",
            is_required: true,
          },
          {
            name: "need_likes",
            description:
              "`1` — будет возвращено дополнительное поле `likes`. По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "start_comment_id",
            description:
              "Идентификатор комментария, начиная с которого нужно вернуть список (подробности см. ниже).",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества комментариев. По умолчанию: `0`.",
            type: "integer",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество комментариев, которое необходимо получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "skip_before_id",
            description:
              "Идентификатор последнего полученного комментания, при подгрузке более новых комментариев. (этот и более старые комментарии получены не будут)",
            type: "positive",
            is_required: false,
          },
          {
            name: "skip_after_id",
            description:
              "Идентификатор последнего полученного комментания, при подгрузке более старых комментариев. (этот и более новые комментарии получены не будут)",
            type: "positive",
            is_required: false,
          },
          {
            name: "sort",
            description:
              "Порядок сортировки комментариев. \nВозможные значения:\n* `asc` — от старых к новым;\n* `desc` — от новых к старым.",
            type: "string",
            is_required: false,
          },
          {
            name: "access_key",
            description: "Ключ доступа к фотографии.",
            type: "string",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — в ответе будут возвращены дополнительные поля `profiles` и `groups`, содержащие информацию о пользователях и сообществах. По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).\nДоступные значения: \n* `about`,\n* `activities`,\n* `bdate`,\n* `blacklisted`,\n* `blacklisted_by_me`,\n* `books`,\n* `can_post`,\n* `can_see_all_posts`,\n* `can_see_audio`,\n* `can_send_friend_request`,\n* `can_write_private_message`,\n* `career`,\n* `city`,\n* `common_count`,\n* `connections`,\n* `contacts`,\n* `country`,\n* `crop_photo`,\n* `domain`,\n* `education`,\n* `exports`,\n* `followers_count`,\n* `friend_status`,\n* `games`,\n* `has_mobile`,\n* `has_photo`,\n* `home_town`,\n* `interests`,\n* `is_favorite`,\n* `is_friend`,\n* `is_hidden_from_feed`,\n* `last_seen`,\n* `lists`,\n* `maiden_name`,\n* `military`,\n* `movies`,\n* `music`,\n* `nickname`,\n* `occupation`,\n* `online`,\n* `personal`,\n* `photo_100`,\n* `photo_200`,\n* `photo_200_orig`,\n* `photo_400_orig`,\n* `photo_50`,\n* `photo_id`,\n* `photo_max`,\n* `photo_max_orig`,\n* `quotes`,\n* `relation`,\n* `relatives`,\n* `schools`,\n* `screen_name`,\n* `sex`,\n* `site`,\n* `status`,\n* `timezone`,\n* `tv`,\n* `universities`,\n* `verified`,\n* `wall_comments`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.getMailUploadServer",
        description: "",
        access_rights: [],
        params: [
          {
            name: "group_id",
            description: "",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.getMarketAlbumUploadServer",
        description:
          "Возвращает адрес сервера для [загрузки﻿ фотографии подборки товаров](api/upload#Загрузка%20фотографии%20для%20товара) в сообществе.",
        access_rights: ["market", "photos"],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, для которого необходимо загрузить фотографию подборки товаров.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "photos.getMarketUploadServer",
        description:
          "Возвращает адрес сервера для [загрузки﻿ фотографии товара](api/upload#Загрузка%20фотографии%20для%20товара).",
        access_rights: ["market", "photos"],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, для которого необходимо загрузить фотографию товара.",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.getOwnerCoverPhotoUploadServer",
        description:
          "Получает адрес для [загрузки обложки сообщества](api/upload#Загрузка%20обложки%20сообщества).",
        access_rights: ["photos"],
        params: [
          {
            name: "group_id",
            description: "Идентификатор сообщества.",
            type: "positive",
            is_required: true,
          },
          {
            name: "crop_x",
            description:
              "Координата `X` верхнего левого угла для обрезки изображения.",
            type: "positive",
            is_required: false,
          },
          {
            name: "crop_y",
            description:
              "Координата `Y` верхнего левого угла для обрезки изображения.",
            type: "positive",
            is_required: false,
          },
          {
            name: "crop_x2",
            description:
              "Координата `X` нижнего правого угла для обрезки изображения.",
            type: "positive",
            is_required: false,
          },
          {
            name: "crop_y2",
            description:
              "Координата `Y` нижнего правого угла для обрезки изображения.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.getOwnerPhotoUploadServer",
        description:
          "Возвращает адрес сервера для [загрузки главной фотографии](api/upload#Загрузка%20главной%20фотографии%20пользователя%20или%20сообщества) на страницу пользователя или сообщества.",
        access_rights: [],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор сообщества или текущего пользователя. \n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.getProfile",
        description:
          "Возвращает список фотографий со страницы пользователя или сообщества. \n\nМетод устарел, воспользуйтесь методом  с параметром `album_id` = `bridge`.",
        access_rights: [],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, фотографии которого нужно получить.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
          {
            name: "photo_ids",
            description:
              "Идентификаторы фотографий, информацию о которых необходимо вернуть.",
            type: "string",
            is_required: false,
          },
          {
            name: "rev",
            description:
              "Порядок сортировки фотографий (`1` — антихронологический, `0` — хронологический).",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — будет возвращено дополнительное поле `likes`. По умолчанию поле `likes` не возвращается.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "feed_type",
            description:
              "Тип новости, получаемый в поле `type` метода [newsfeed.get](method/newsfeed.get).",
            type: "string",
            is_required: false,
          },
          {
            name: "feed",
            description:
              "`Unixtime`, который может быть получен методом [newsfeed.get](method/newsfeed.get) в поле `date`, для получения всех фотографий загруженных пользователем в определённый день либо на которых пользователь был отмечен. Также нужно указать параметр `uid` пользователя, с которым произошло событие.",
            type: "integer",
            is_required: false,
          },
          {
            name: "photo_sizes",
            description:
              "Возвращать ли размеры фотографий в специальном формате.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для получения определенной выборки фотографий. По умолчанию — `0`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество фотографий, которые необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.getUploadServer",
        description:
          "Возвращает адрес сервера для [загрузки фотографий](api/upload#Загрузка%20фотографий%20в%20альбом).",
        access_rights: ["photos"],
        params: [
          {
            name: "album_id",
            description: "Идентификатор альбома.",
            type: "integer",
            is_required: false,
          },
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, которому принадлежит альбом (если необходимо загрузить фотографию в альбом сообщества).\n\n> Если `group_id` не указан, возвращается адрес для загрузки на стену текущего пользователя.",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.getUserPhotos",
        description:
          "Возвращает список фотографий, на которых отмечен пользователь",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, список фотографий для которого нужно получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества фотографий. По умолчанию — `0`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество фотографий, которое необходимо получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — будут возвращены дополнительные поля `likes`, `comments`, `tags`, `can_comment`. Поля `comments` и `tags` содержат только количество объектов. По умолчанию данные поля не возвращается.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "sort",
            description:
              "Сортировка результатов (`0` — по дате добавления отметки в порядке убывания, `1` — по дате добавления отметки в порядке возрастания).",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.getWallUploadServer",
        description:
          "Возвращает адрес сервера для [загрузки﻿ фотографии на стену](api/upload#Загрузка%20фотографий%20на%20стену) пользователя или сообщества.",
        access_rights: ["photos"],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, на стену которого нужно загрузить фото (без знака «минус»).",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.makeCover",
        description: "Делает фотографию обложкой альбома.",
        access_rights: ["photos"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит фотография. \n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
          {
            name: "photo_id",
            description:
              "Идентификатор фотографии. Фотография должна находиться в альбоме `album_id`.",
            type: "integer",
            is_required: true,
          },
          {
            name: "album_id",
            description: "Идентификатор альбома.",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.move",
        description: "Переносит фотографию из одного альбома в другой.",
        access_rights: ["photos"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит фотография. \n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
          {
            name: "target_album_id",
            description:
              "Идентификатор альбома, в который нужно переместить фотографию.",
            type: "integer",
            is_required: true,
          },
          {
            name: "photo_id",
            description: "Идентификатор фотографии, которую нужно перенести.",
            type: "integer",
            is_required: true,
          },
        ],
      },
      {
        title: "photos.reorderAlbums",
        description: "Меняет порядок альбома в списке альбомов пользователя.",
        access_rights: ["photos"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит альбом. \n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
          {
            name: "album_id",
            description: "Идентификатор альбома.",
            type: "integer",
            is_required: true,
          },
          {
            name: "before",
            description:
              "Идентификатор альбома, перед которым следует поместить альбом.",
            type: "integer",
            is_required: false,
          },
          {
            name: "after",
            description:
              "Идентификатор альбома, после которого следует поместить альбом.",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.reorderPhotos",
        description:
          "Меняет порядок фотографии в списке фотографий альбома пользователя.",
        access_rights: ["photos"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит фотография. \n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
          {
            name: "photo_id",
            description: "Идентификатор фотографии.",
            type: "integer",
            is_required: true,
          },
          {
            name: "before",
            description:
              "Идентификатор фотографии, перед которой следует поместить фотографию. Если параметр не указан, фотография будет помещена последней.",
            type: "integer",
            is_required: false,
          },
          {
            name: "after",
            description:
              "Идентификатор фотографии, после которой следует поместить фотографию. Если параметр не указан, фотография будет помещена первой.",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.save",
        description: "Сохраняет фотографии после успешной загрузки.",
        access_rights: ["photos"],
        params: [
          {
            name: "album_id",
            description:
              "Идентификатор альбома, в который необходимо сохранить фотографии.",
            type: "integer",
            is_required: false,
          },
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, в которое необходимо сохранить фотографии.",
            type: "integer",
            is_required: false,
          },
          {
            name: "server",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографий на сервер](api/upload#Загрузка%20фотографий%20в%20альбом).",
            type: "integer",
            is_required: false,
          },
          {
            name: "photos_list",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографий на сервер](api/upload#Загрузка%20фотографий%20в%20альбом).",
            type: "string",
            is_required: false,
          },
          {
            name: "hash",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографий на сервер](api/upload#Загрузка%20фотографий%20в%20альбом).",
            type: "string",
            is_required: false,
          },
          {
            name: "latitude",
            description:
              "Географическая широта, заданная в градусах (от -90 до 90).",
            type: "string",
            is_required: false,
          },
          {
            name: "longitude",
            description:
              "Географическая долгота, заданная в градусах (от -180 до 180).",
            type: "string",
            is_required: false,
          },
          {
            name: "caption",
            description: "Текст описания фотографии (максимум 2048 символов).",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.saveMailPhoto",
        description: "",
        access_rights: [],
        params: [
          {
            name: "photo",
            description: "",
            type: "string",
            is_required: true,
          },
          {
            name: "aid",
            description: "",
            type: "integer",
            is_required: false,
          },
          {
            name: "gid",
            description: "",
            type: "integer",
            is_required: false,
          },
          {
            name: "server",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "hash",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "latitude",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "longitude",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "caption",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "description",
            description: "",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.saveMarketAlbumPhoto",
        description:
          "Сохраняет фотографии после успешной загрузки на URI, полученный методом [photos.getMarketAlbumUploadServer](method/photos.getMarketAlbumUploadServer).",
        access_rights: ["market", "photos"],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор группы, для которой нужно загрузить фотографию.",
            type: "positive",
            is_required: true,
          },
          {
            name: "photo",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографии на сервер](api/upload#Загрузка%20фотографии%20для%20подборки%20товаров).\n\nМинимальный размер фотографии — 1280x720 пикселей.",
            type: "string",
            is_required: true,
          },
          {
            name: "server",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографии на сервер](api/upload#Загрузка%20фотографии%20для%20подборки%20товаров).",
            type: "positive",
            is_required: true,
          },
          {
            name: "hash",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографии на сервер](api/upload#Загрузка%20фотографии%20для%20подборки%20товаров).",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "photos.saveMarketPhoto",
        description:
          "Сохраняет фотографии после успешной загрузки на URI, полученный методом .",
        access_rights: ["market", "photos"],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор группы, для которой нужно загрузить фотографию.",
            type: "positive",
            is_required: false,
          },
          {
            name: "photo",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографии на сервер](api/upload#Загрузка%20фотографии%20для%20товара).",
            type: "string",
            is_required: true,
          },
          {
            name: "server",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографии на сервер](api/upload#Загрузка%20фотографии%20для%20товара).",
            type: "integer",
            is_required: true,
          },
          {
            name: "hash",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографии на сервер](api/upload#Загрузка%20фотографии%20для%20товара).",
            type: "string",
            is_required: true,
          },
          {
            name: "crop_data",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографии на сервер](api/upload#Загрузка%20фотографии%20для%20товара).\n\nОбязательный параметр, если на этапе загрузки фото был передан `main_photo`=`1`.",
            type: "string",
            is_required: false,
          },
          {
            name: "crop_hash",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографии на сервер](api/upload#Загрузка%20фотографии%20для%20товара).\n\nОбязательный параметр, если на этапе загрузки фото был передан `main_photo`=`1`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.saveOwnerCoverPhoto",
        description:
          "Сохраняет изображение для обложки сообщества после [успешной загрузки](api/upload#Загрузка%20обложки%20сообщества).",
        access_rights: ["photos"],
        params: [
          {
            name: "hash",
            description:
              "Параметр `hash`, полученный в результате [загрузки фотографии на сервер](api/upload#Загрузка%20обложки%20сообщества).",
            type: "string",
            is_required: true,
          },
          {
            name: "photo",
            description:
              "Параметр `photo`, полученный в результате [загрузки фотографии на сервер](api/upload#Загрузка%20обложки%20сообщества).",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "photos.saveOwnerPhoto",
        description:
          "Позволяет сохранить главную фотографию пользователя или сообщества.",
        access_rights: [],
        params: [
          {
            name: "server",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографии на сервер](api/upload#Загрузка%20главной%20фотографии%20пользователя%20или%20сообщества).",
            type: "string",
            is_required: false,
          },
          {
            name: "hash",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографии на сервер](api/upload#Загрузка%20главной%20фотографии%20пользователя%20или%20сообщества).",
            type: "string",
            is_required: false,
          },
          {
            name: "photo",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографии на сервер](api/upload#Загрузка%20главной%20фотографии%20пользователя%20или%20сообщества).",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.saveWallPhoto",
        description:
          "Сохраняет фотографии после успешной загрузки на URI, полученный методом [photos.getWallUploadServer](method/photos.getWallUploadServer).",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, на стену которого нужно сохранить фотографию.",
            type: "positive",
            is_required: false,
          },
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, на стену которого нужно сохранить фотографию.",
            type: "positive",
            is_required: false,
          },
          {
            name: "photo",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографии на сервер](api/upload#Загрузка%20фотографий%20на%20стену).",
            type: "string",
            is_required: true,
          },
          {
            name: "server",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографии на сервер](api/upload#Загрузка%20фотографий%20на%20стену).",
            type: "integer",
            is_required: false,
          },
          {
            name: "hash",
            description:
              "Параметр, возвращаемый в результате [загрузки фотографии на сервер](api/upload#Загрузка%20фотографий%20на%20стену).",
            type: "string",
            is_required: false,
          },
          {
            name: "latitude",
            description:
              "Географическая широта, заданная в градусах (от -90 до 90).",
            type: "string",
            is_required: false,
          },
          {
            name: "longitude",
            description:
              "Географическая долгота, заданная в градусах (от -180 до 180).",
            type: "string",
            is_required: false,
          },
          {
            name: "caption",
            description:
              "Текст описания фотографии (максимум **2048** символов).",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "photos.search",
        description:
          "Осуществляет поиск изображений по местоположению или описанию.",
        access_rights: [],
        params: [
          {
            name: "q",
            description: "Строка поискового запроса, например, `Nature`.",
            type: "string",
            is_required: false,
          },
          {
            name: "lat",
            description:
              "Географическая широта отметки, заданная в градусах (от -90 до 90).",
            type: "string",
            is_required: false,
          },
          {
            name: "long",
            description:
              "Географическая долгота отметки, заданная в градусах (от -180 до 180).",
            type: "string",
            is_required: false,
          },
          {
            name: "start_time",
            description:
              "Время в формате `unixtime`, не раньше которого должны были быть загружены найденные фотографии.",
            type: "positive",
            is_required: false,
          },
          {
            name: "end_time",
            description:
              "Время в формате `unixtime`, не позже которого должны были быть загружены найденные фотографии.",
            type: "positive",
            is_required: false,
          },
          {
            name: "sort",
            description:
              "Сортировка результатов. Возможные значения:\n* `1` — по количеству отметок «Мне нравится»;\n* `0` — по дате добавления фотографии.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение относительно первой найденной фотографии для выборки определённого подмножества.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество возвращаемых фотографий.\n\n> Обратите внимание, даже при использовании параметра `offset` для получения информации доступны не больше 3000 результатов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "radius",
            description:
              "Радиус поиска в метрах. Работает очень приближенно, поэтому реальное расстояние до цели может отличаться от заданного. Может принимать значения: `10`, `100`, `800`, `6000`, `50000`.",
            type: "positive",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Places",
    methods: [
      {
        title: "places.getCheckins",
        description:
          "Возвращает список отметок пользователей в местах согласно заданным параметрам.",
        access_rights: [],
        params: [
          {
            name: "latitude",
            description:
              "Географическая широта исходной точки поиска, заданная в градусах (от -90 до 90).",
            type: "string",
            is_required: false,
          },
          {
            name: "longitude",
            description:
              "Географическая долгота исходной точки поиска, заданная в градусах (от -180 до 180).",
            type: "string",
            is_required: false,
          },
          {
            name: "place",
            description:
              "Идентификатор места. Игнорируется, если указаны `latitude` и `longitude`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "user_id",
            description:
              "Идентификатор пользователя. Игнорируется, если указаны `latitude` и `longitude` или `place`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение относительно первой отметки для выборки определенного подмножества. Игнорируется, если установлен ненулевой `timestamp`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество возвращаемых отметок. Игнорируется, если установлен ненулевой `timestamp`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "timestamp",
            description:
              "Указывает, что нужно вернуть только те отметки, которые были созданы после заданного `timestamp`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "friends_only",
            description:
              "`1` — указывает, что следует выводить только отметки друзей, если заданы географические координаты. Игнорируется, если не заданы параметры `latitude` и `longitude`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "need_places",
            description:
              "Указывает, следует ли возвращать информацию о месте в котором была сделана отметка. Игнорируется, если указан параметр `place`.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Podcasts",
    methods: [
      {
        title: "podcasts.searchPodcast",
        description: "",
        access_rights: [],
        params: [
          {
            name: "search_string",
            description: "",
            type: "string",
            is_required: true,
          },
          {
            name: "offset",
            description: "",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "",
            type: "positive",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Polls",
    methods: [
      {
        title: "polls.getById",
        description:
          "Возвращает детальную информацию об опросе по его идентификатору.",
        access_rights: ["wall"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит опрос.",
            type: "integer",
            is_required: false,
          },
          {
            name: "is_board",
            description:
              "`1` — опрос находится в обсуждении, `0` — опрос прикреплен к стене.\nПо умолчанию — `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "poll_id",
            description: "Идентификатор опроса.",
            type: "positive",
            is_required: true,
          },
          {
            name: "extended",
            description:
              "`1` — возвращать дополнительную информацию о профилях пользователей.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "friends_count",
            description:
              "Число идентификаторов проголосовавших друзей, которые необходимо вернуть в ответе.",
            type: "positive",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей профилей. См. [список возможных значений](reference/objects/user)",
            type: "string",
            is_required: false,
          },
          {
            name: "name_case",
            description:
              "Падеж для склонения имени и фамилии пользователя. \nВозможные значения: \n* именительный – `nom`,\n* родительный – `gen`,\n* дательный – `dat`,\n* винительный – `acc`,\n* творительный – `ins`,\n* предложный – `abl`.\n\n По умолчанию `nom`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "polls.getVoters",
        description:
          "Получает список идентификаторов пользователей, которые выбрали определенные варианты ответа в опросе.",
        access_rights: [],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит опрос.",
            type: "integer",
            is_required: false,
          },
          {
            name: "poll_id",
            description: "Идентификатор опроса.",
            type: "positive",
            is_required: true,
          },
          {
            name: "answer_ids",
            description: "Идентификаторы вариантов ответа.",
            type: "string",
            is_required: true,
          },
          {
            name: "is_board",
            description:
              "`1` — опрос находится в обсуждении, `0` — опрос прикреплен к стене.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "friends_only",
            description:
              "Указывает, необходимо ли возвращать только пользователей, которые являются друзьями текущего пользователя. \nПараметр может принимать следующие значения:\n* `0` — возвращать всех пользователей в порядке убывания времени голосования;\n* `1` — возвращать только друзей текущего пользователя в порядке убывания времени голосования. \n\nЕсли параметр не был задан, то считается, что он равен `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение относительно начала списка, для выборки определенного подмножества. Если параметр не задан, то считается, что он равен `0`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество возвращаемых идентификаторов пользователей.\nЕсли параметр не задан, то считается, что он равен **100**, если не задан параметр `friends_only`, в противном случае **10**.\nМаксимальное значение параметра **1000**, если не задан параметр `friends_only`, в противном случае **100**.",
            type: "positive",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Перечисленные через запятую поля анкет, необходимые для получения. Доступные значения: `nickname`, `screen_name`, `sex`, `bdate` (`birthdate`), `city`, `country`, `timezone`, `photo`, `photo_medium`, `photo_big`, `has_mobile`, `rate`, `contacts`, `education`, `online`, `counters`.",
            type: "string",
            is_required: false,
          },
          {
            name: "name_case",
            description:
              "Падеж для склонения имени и фамилии пользователя. \nВозможные значения:\n* именительный – `nom`,\n* родительный – `gen`,\n* дательный – `dat`,\n* винительный – `acc`,\n* творительный – `ins`,\n* предложный – `abl`. \n\nПо умолчанию `nom`.",
            type: "string",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "PrettyCards",
    methods: [
      {
        title: "prettyCards.create",
        description: "Создаёт карточку карусели.",
        access_rights: ["ads"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца карточки. Необходимо указать идентификатор сообщества, взятый со знаком минус. Пример:  `-19542789`.",
            type: "string",
            is_required: true,
          },
          {
            name: "photo",
            description:
              "Фотография карточки.\n\nИспользуйте значение, полученное после загрузки фотографии на сервер. См. метод [prettyCards.getUploadURL](method/prettyCards.getUploadURL).\n\nТакже можно переиспользовать существующую фотографию из другой карточки. Используйте значение поля `photo`, которое возвращает метод [prettyCards.get](method/prettyCards.get) или [prettyCards.getById](method/prettyCards.getById).",
            type: "string",
            is_required: true,
          },
          {
            name: "title",
            description: "Заголовок. ",
            type: "string",
            is_required: true,
          },
          {
            name: "link",
            description:
              "Ссылка. Кроме HTTP(S)-ссылок также допускается указание телефонных номеров в виде `tel:+79111234567`. ",
            type: "string",
            is_required: true,
          },
          {
            name: "price",
            description:
              "Цена. «0» будет отображён как «Бесплатно». Не передавайте этот параметр, чтобы не указывать цену.",
            type: "string",
            is_required: false,
          },
          {
            name: "price_old",
            description:
              "Старая цена. Отображается зачёркнутой. «0» будет отображён как «Бесплатно». Не передавайте этот параметр, чтобы не указывать старую цену.",
            type: "string",
            is_required: false,
          },
          {
            name: "button",
            description:
              "Кнопка. Не передавайте этот параметр, чтобы не использовать кнопку.\n\n | `button` | **Текст** | **Действие** | **Тип ссылок** |\n|---|---|---|---|\n | `app_join` | Запустить | Переход по ссылке | Приложения и игры |\n | `app_game_join` | Играть | Переход по ссылке | Игры |\n | `open_url` | Перейти | Переход по ссылке | Внешние сайты, сообщества, приложения |\n | `open` | Открыть | Переход по ссылке | Внешние сайты |\n | `more` | Подробнее | Переход по ссылке | Сообщества |\n | `call` | Позвонить | Набор номера | Телефонные номера |\n | `book` | Забронировать | Набор номера | Телефонные номера |\n | `enroll` | Записаться | Переход по ссылке или набор номера | Внешние сайты, телефонные номера |\n | `register` | Зарегистрироваться | Набор номера | Телефонные номера |\n | `buy` | Купить | Переход по ссылке | Внешние сайты |\n | `buy_ticket` | Купить билет | Переход по ссылке | Внешние сайты |\n | `to_shop` | В магазин | Переход по ссылке | Внешние сайты |\n | `order` | Заказать | Переход по ссылке | Внешние сайты |\n | `create` | Создать | Переход по ссылке | Внешние сайты |\n | `install` | Установить | Переход по ссылке | Внешние сайты |\n | `contact` | Связаться | Переход по ссылке | Внешние сайты |\n | `fill` | Заполнить | Переход по ссылке | Внешние сайты |\n | `choose` | Выбрать | Переход по ссылке | Внешние сайты |\n | `try` | Попробовать | Переход по ссылке | Внешние сайты |\n | `join_public` | Подписаться | Подписка на публичную страницу | Публичные страницы |\n | `join_event` | Я пойду | Участие в мероприятии | События |\n | `join_group` | Вступить | Вступление в сообщество | Сообщества |\n | `im_group` | Связаться | Переход к диалогу с сообществом | Сообщества, публичные страницы, события |\n | `im_group2` | Написать | Переход к диалогу с сообществом | Сообщества, публичные страницы, события |\n | `begin` | Начать | Переход по ссылке | Внешние сайты |\n | `get` | Получить | Переход по ссылке | Внешние сайты |",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "prettyCards.delete",
        description: "Удаляет карточку.",
        access_rights: ["ads"],
        params: [
          {
            name: "owner_id",
            description: "Идентификатор владельца карточки.",
            type: "string",
            is_required: true,
          },
          {
            name: "card_id",
            description: "Идентификатор карточки.",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "prettyCards.edit",
        description: "Редактирует карточку карусели.",
        access_rights: ["ads"],
        params: [
          {
            name: "owner_id",
            description: "Идентификатор владельца карточки.",
            type: "string",
            is_required: true,
          },
          {
            name: "card_id",
            description: "Идентификатор карточки.",
            type: "string",
            is_required: true,
          },
          {
            name: "photo",
            description:
              "Новая фотография. Подробнее см. метод [prettyCards.create](method/prettyCards.create).",
            type: "string",
            is_required: false,
          },
          {
            name: "title",
            description: "Новый заголовок.",
            type: "string",
            is_required: false,
          },
          {
            name: "link",
            description:
              "Новая ссылка. Подробнее см. метод [prettyCards.create](method/prettyCards.create).",
            type: "string",
            is_required: false,
          },
          {
            name: "price",
            description:
              "Новая цена. Подробнее см. метод [prettyCards.create](method/prettyCards.create).",
            type: "string",
            is_required: false,
          },
          {
            name: "price_old",
            description:
              "Обновлённая старая цена. Подробнее см. метод [prettyCards.create](method/prettyCards.create).",
            type: "string",
            is_required: false,
          },
          {
            name: "button",
            description:
              "Новая кнопка. Подробнее см. метод [prettyCards.create](method/prettyCards.create).",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "prettyCards.get",
        description: "Возвращает неиспользованные карточки владельца.",
        access_rights: ["ads"],
        params: [
          {
            name: "owner_id",
            description: "Идентификатор владельца.",
            type: "string",
            is_required: true,
          },
          {
            name: "offset",
            description: "Смещение относительно начала списка карточек.",
            type: "integer",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество возвращаемых карточек.",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "prettyCards.getById",
        description: "Возвращает информацию о карточке.",
        access_rights: ["ads"],
        params: [
          {
            name: "owner_id",
            description: "Идентификатор владельца карточки.",
            type: "string",
            is_required: true,
          },
          {
            name: "card_ids",
            description:
              "Список идентификаторов карточек, которые необходимо вернуть. Строка с числами, разделёнными запятой.",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "prettyCards.getUploadURL",
        description: "Возвращает URL для загрузки фотографии для карточки.",
        access_rights: ["ads"],
        params: [],
      },
    ],
  },
  {
    title: "Search",
    methods: [
      {
        title: "search.getHints",
        description:
          "Метод позволяет получить результаты быстрого поиска по произвольной подстроке. ",
        access_rights: ["friends", "groups"],
        params: [
          {
            name: "q",
            description: "Текст запроса, результаты которого нужно получить",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение для выборки определённого подмножества результатов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "limit",
            description: "Ограничение на количество возвращаемых результатов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "filters",
            description:
              "Перечисленные через запятую типы данных, которые необходимо вернуть. Возможные значения:\n* `friends` – друзья пользователя;\n* `idols` – подписки пользователя;\n* `publics` – публичные страницы, на которые подписан пользователь;\n* `groups` – группы пользователя;\n* `events` – встречи пользователя;\n* `correspondents` – люди, с которыми пользователь имеет переписку;\n* `mutual_friends` – люди, у которых  есть общие друзья с текущим пользователем (этот фильтр позволяет получить не всех пользователей, имеющих общих друзей).\n\n\n\nПо умолчанию возвращаются все.",
            type: "string",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Дополнительные поля [профилей](reference/objects/user) и [сообществ](reference/objects/group) для получения.",
            type: "string",
            is_required: false,
          },
          {
            name: "search_global",
            description:
              "`1` — к результатам поиска добавляются результаты глобального поиска по всем пользователям и группам.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Secure",
    methods: [
      {
        title: "secure.addAppEvent",
        description:
          "Добавляет информацию о достижениях пользователя в приложении.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, для которого нужно записать данные.",
            type: "positive",
            is_required: true,
          },
          {
            name: "activity_id",
            description:
              "Идентификатор достижения. Доступные значения:\n* `1` — достигнут новый уровень, работает аналогично [secure.setUserLevel](method/secure.setUserLevel);\n* `2` — заработано новое число очков;\n* положительное число, отличное от `1` и `2` — выполнена миссия с идентификатором `activity_id`.",
            type: "positive",
            is_required: true,
          },
          {
            name: "value",
            description:
              "Номер уровня или заработанное количество очков (соответственно, для `activity_id`=`1` и `activity_id`=`2`).\n\nПараметр игнорируется при значении `activity_id`, отличном от `1` и `2`.\n\nЕсли `activity_id` = `1`, то максимальное `value` `15000`.\nЕсли `activity_id` = `2`, то максимальное `value` `10000000`.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "secure.checkToken",
        description:
          "Позволяет проверять валидность ключа доступа пользователя в **iFrame**, **VK Mini Apps** и **Standalone**-приложениях с помощью передаваемого в приложения параметра `access_token`.",
        access_rights: [],
        params: [
          {
            name: "token",
            description: "Клиентский `access_token`.",
            type: "string",
            is_required: false,
          },
          {
            name: "ip",
            description:
              "IP-адрес пользователя. Обратите внимание, что пользователь может обращаться через IPv6, в этом случае обязательно передавать IPv6-адрес пользователя.\nЕсли параметр не передан, IP-адрес проверен не будет.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "secure.getAppBalance",
        description:
          "Возвращает платежный баланс (счет) приложения в сотых долях голоса.",
        access_rights: ["votes"],
        params: [],
      },
      {
        title: "secure.getSMSHistory",
        description:
          "Выводит список SMS-уведомлений, отосланных приложением с помощью метода [secure.sendSMSNotification](method/secure.sendSMSNotification).",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description: "",
            type: "positive",
            is_required: false,
          },
          {
            name: "date_from",
            description: "Фильтр по дате начала. Задается в виде UNIX-time.",
            type: "positive",
            is_required: false,
          },
          {
            name: "date_to",
            description: "Фильтр по дате окончания. Задается в виде UNIX-time.",
            type: "positive",
            is_required: false,
          },
          {
            name: "limit",
            description:
              "Количество возвращаемых записей. По умолчанию **1000**.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "secure.getTransactionsHistory",
        description:
          "Выводит историю транзакций по переводу голосов между пользователями и приложением.",
        access_rights: ["votes"],
        params: [],
      },
      {
        title: "secure.getUserLevel",
        description:
          "Возвращает ранее выставленный игровой уровень одного или нескольких пользователей в приложении.",
        access_rights: [],
        params: [
          {
            name: "user_ids",
            description: "",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "secure.giveEventSticker",
        description:
          "Выдает пользователю стикер и открывает игровое достижение.",
        access_rights: [],
        params: [
          {
            name: "user_ids",
            description:
              "Список id пользователей которым нужно открыть достижение.",
            type: "string",
            is_required: true,
          },
          {
            name: "achievement_id",
            description: "ID игрового достижения на платформе игр.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "secure.sendNotification",
        description: "Отправляет уведомление пользователю.",
        access_rights: ["notify_global"],
        params: [
          {
            name: "user_ids",
            description:
              "Перечисленные через запятую идентификаторы пользователей, которым отправляется уведомление (максимум **100** штук).",
            type: "string",
            is_required: false,
          },
          {
            name: "user_id",
            description: "Идентификатор пользователя.",
            type: "positive",
            is_required: false,
          },
          {
            name: "message",
            description:
              "Текст уведомления, который следует передавать в кодировке **UTF-8** (максимум **254** символа).",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "secure.sendSMSNotification",
        description:
          "Отправляет **SMS**-уведомление на мобильный телефон пользователя.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description:
              "ID пользователя, которому отправляется SMS-уведомление. Пользователь должен разрешить приложению отсылать ему уведомления (getUserSettings, +1).",
            type: "positive",
            is_required: true,
          },
          {
            name: "message",
            description:
              "Текст SMS, который следует передавать в кодировке UTF-8. Допускаются только латинские буквы и цифры. Максимальный размер — **160** символов.",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "secure.setCounter",
        description:
          "Устанавливает счетчик, который выводится пользователю жирным шрифтом в левом меню.",
        access_rights: [],
        params: [
          {
            name: "counters",
            description:
              "Позволяет устанавливать счетчики нескольким пользователям за один запрос. \n\nЗначение следует указывать в следующем формате: \n\n```\nuser_id1:counter1[:increment],user_id2:counter2[:increment]\n\n```\n\nПример:\n\n```\n66748:6:1,6492:2\n```\n\nВ случае, если указан этот параметр, параметры `counter`, `user_id` и `increment` не учитываются. Можно передать не более **200** значений за один запрос.",
            type: "string",
            is_required: false,
          },
          {
            name: "user_id",
            description: "Идентификатор пользователя.",
            type: "positive",
            is_required: false,
          },
          {
            name: "counter",
            description: "Значение счетчика.",
            type: "integer",
            is_required: false,
          },
          {
            name: "increment",
            description:
              "Определяет, нужно ли заменить значение счетчика или прибавить новое значение к уже имеющемуся. `1` — прибавить `counter` к старому значению, `0` — заменить счетчик (по умолчанию).",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "secure.setUserLevel",
        description:
          "Устанавливает игровой уровень пользователя в приложении, который смогут увидеть его друзья.",
        access_rights: [],
        params: [
          {
            name: "levels",
            description:
              "Позволяет указывать уровни нескольким пользователям за один запрос. \n\nЗначение следует указывать в следующем формате: \n\n```\nuser_id1:level1,user_id2:level2\n```\n\nПример: \n\n```\n66748:6,6492:2\n```\n\nВ случае, если указан этот параметр, параметры `level` и `user_id` не учитываются. Метод принимает не более **200** значений за один запрос.",
            type: "string",
            is_required: false,
          },
          {
            name: "user_id",
            description: "Идентификатор пользователя.",
            type: "positive",
            is_required: false,
          },
          {
            name: "level",
            description: "Значение уровня.",
            type: "positive",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Stats",
    methods: [
      {
        title: "stats.get",
        description: "Возвращает статистику сообщества или приложения.",
        access_rights: [],
        params: [
          {
            name: "group_id",
            description: "Идентификатор сообщества.",
            type: "positive",
            is_required: false,
          },
          {
            name: "app_id",
            description: "Идентификатор приложения.",
            type: "positive",
            is_required: false,
          },
          {
            name: "date_from",
            description:
              "Начальная дата выводимой статистики в формате YYYY-MM-DD.",
            type: "string",
            is_required: false,
          },
          {
            name: "date_to",
            description:
              "Конечная дата выводимой статистики в формате YYYY-MM-DD.",
            type: "string",
            is_required: false,
          },
          {
            name: "timestamp_from",
            description: "Начало периода статистики в `Unixtime`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "timestamp_to",
            description: "Окончание периода статистики в `Unixtime`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "interval",
            description:
              "Временные интервалы. Возможные значения: `day`, `week`, `month`, `year`, `all`. По умолчанию: `day`.",
            type: "string",
            is_required: false,
          },
          {
            name: "intervals_count",
            description: "Количество интервалов времени.",
            type: "positive",
            is_required: false,
          },
          {
            name: "filters",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "stats_groups",
            description:
              "Фильтр для получения данных по конкретному блоку статистики сообщества. Возможные значения: `visitors`, `reach`, `activity`.",
            type: "string",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — возвращать дополнительно агрегированные данные в результатах.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "stats.getPostReach",
        description: "Возвращает статистику для записи на стене.",
        access_rights: [],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор сообщества — владельца записи. Указывается со знаком «минус».",
            type: "string",
            is_required: true,
          },
          {
            name: "post_ids",
            description: "",
            type: "string",
            is_required: true,
          },
        ],
      },
    ],
  },
  {
    title: "Status",
    methods: [
      {
        title: "status.get",
        description: "Получает текст статуса пользователя или сообщества.",
        access_rights: ["activity"],
        params: [
          {
            name: "user_id",
            description:
              "Идентификатор пользователя или сообщества, информацию о статусе которого нужно получить.",
            type: "integer",
            is_required: false,
          },
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, статус которого необходимо получить.",
            type: "positive",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Storage",
    methods: [
      {
        title: "storage.get",
        description:
          "Возвращает значение переменной, название которой передано в параметре `key`.",
        access_rights: [],
        params: [
          {
            name: "key",
            description: "Название переменной.",
            type: "string",
            is_required: false,
          },
          {
            name: "keys",
            description:
              "Список названий переменных, разделённых запятыми. Если указан этот параметр, то параметр `key` не учитывается.",
            type: "string",
            is_required: false,
          },
          {
            name: "user_id",
            description:
              "ID пользователя, переменная которого устанавливается, в случае если данные запрашиваются серверным методом.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "storage.getKeys",
        description: "Возвращает названия всех переменных.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description:
              "ID пользователя, названия переменных которого получаются, в случае если данные запрашиваются серверным методом.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества названий переменных. По умолчанию `0`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество названий переменных, информацию о которых необходимо получить.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "storage.set",
        description:
          "Сохраняет значение переменной, название которой передано в параметре `key`.",
        access_rights: [],
        params: [
          {
            name: "key",
            description:
              "Название переменной. Может содержать символы латинского алфавита, цифры, знак тире, нижнее подчёркивание [a-zA-Z_\\-0-9].",
            type: "string",
            is_required: true,
          },
          {
            name: "value",
            description:
              "Значение переменной, сохраняются только первые **4096** байта.",
            type: "text",
            is_required: false,
          },
          {
            name: "user_id",
            description:
              "ID пользователя, переменная которого устанавливается, в случае если данные запрашиваются серверным методом.",
            type: "positive",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Stories",
    methods: [
      {
        title: "stories.search",
        description: "Возвращает результаты поиска по историям.",
        access_rights: ["stories"],
        params: [
          {
            name: "q",
            description: "Поисковый запрос.",
            type: "string",
            is_required: false,
          },
          {
            name: "place_id",
            description: "Идентификатор места.",
            type: "positive",
            is_required: false,
          },
          {
            name: "latitude",
            description:
              "Географическая широта точки, в радиусе которой необходимо производить поиск, заданная в градусах (от -90 до 90).",
            type: "string",
            is_required: false,
          },
          {
            name: "longitude",
            description:
              "Географическая долгота точки, в радиусе которой необходимо производить поиск, заданная в градусах (от -180 до 180).",
            type: "string",
            is_required: false,
          },
          {
            name: "radius",
            description: "Радиус зоны поиска в метрах.",
            type: "positive",
            is_required: false,
          },
          {
            name: "mentioned_id",
            description:
              "Идентификатор упомянутого в истории пользователя или сообщества.",
            type: "integer",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество историй, информацию о которых необходимо вернуть.",
            type: "integer",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "Параметр, определяющий необходимость возвращать расширенную информацию о владельце истории. Возможные значения:\n* `0` — возвращаются только идентификаторы;\n* `1` — будут дополнительно возвращены имя и фамилия.\n\nПо умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "stories.sendInteraction",
        description: "Отправляет фидбек на историю.",
        access_rights: [],
        params: [
          {
            name: "access_key",
            description:
              "Ключ доступа пользователя, полученный при подписке. Возвращает событие [VKWebAppSubscribeStoryApp](bridge/VKWebAppSubscribeStoryApp).",
            type: "string",
            is_required: true,
          },
          {
            name: "message",
            description: "Текст фидбека.",
            type: "string",
            is_required: false,
          },
          {
            name: "is_broadcast",
            description:
              "Возможные значения:\n*  `0` —  фидбек виден только отправителю и автору истории;\n*  `1` —  фидбек виден всем зрителям истории и автору.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "is_anonymous",
            description:
              "Возможные значения:\n*  `0` — автор фидбека не  анонимный;\n*  `1` —  автор фидбека  анонимный.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "unseen_marker",
            description: "",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Streaming",
    methods: [
      {
        title: "streaming.getServerUrl",
        description:
          "Позволяет получить данные для подключения к [Streaming API](api/streaming/getting-started).",
        access_rights: [],
        params: [],
      },
      {
        title: "streaming.getSettings",
        description:
          "Позволяет получить значение порога для [Streaming API](api/streaming/getting-started).",
        access_rights: [],
        params: [],
      },
      {
        title: "streaming.getStats",
        description:
          "Позволяет получить статистику для подготовленных и доставленных событий [Streaming API](api/streaming/getting-started).",
        access_rights: [],
        params: [
          {
            name: "type",
            description:
              "Тип статистики. Возможные значения:\n* `received` — события, полученные приложением;\n* `prepared` — события, сгенерированные со стороны ВКонтакте.",
            type: "string",
            is_required: false,
          },
          {
            name: "interval",
            description:
              "Интервалы статистики. Возможные значения:\n* `5m` — пять минут. Максимальный период — 3 дня между `start_time` и `end_time`;\n* `1h` — один час. Максимальный период — 7 дней между `start_time` и `end_time`;\n* `24h` — сутки. Максимальный период — 31 день между `start_time` и `end_time`.",
            type: "string",
            is_required: false,
          },
          {
            name: "start_time",
            description:
              "Время начала отсчёта в `unixtime`. По умолчанию: `end_time` минус сутки.",
            type: "positive",
            is_required: false,
          },
          {
            name: "end_time",
            description:
              "Время окончания отсчёта в `unixtime`. По умолчанию: текущее время.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "streaming.getStem",
        description: "Позволяет получить основу слова.",
        access_rights: [],
        params: [
          {
            name: "word",
            description: "Слово, основу которого мы собираемся получить.",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "streaming.setSettings",
        description:
          "Позволяет задать значение порога для [Streaming API](api/streaming/getting-started).",
        access_rights: [],
        params: [
          {
            name: "monthly_tier",
            description:
              "Значение порога в месяц. Возможные значения:\n* `tier_1`;\n* `tier_2`;\n* `tier_3`;\n* `tier_4`;\n* `tier_5`;\n* `tier_6`;\n* `unlimited`.",
            type: "string",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Users",
    methods: [
      {
        title: "users.get",
        description: "Возвращает расширенную информацию о пользователях.",
        access_rights: [],
        params: [
          {
            name: "user_ids",
            description:
              "Перечисленные через запятую идентификаторы пользователей или их короткие имена (`screen_name`). По умолчанию — идентификатор текущего пользователя.",
            type: "string",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).\n\nДоступные значения:\n* `activities`,\n* `about`, \n* `blacklisted`,\n* `blacklisted_by_me`,\n* `books`,\n* `bdate`,\n* `can_be_invited_group`,\n* `can_post`,\n* `can_see_all_posts`,\n* `can_see_audio`,\n* `can_send_friend_request`, \n* `can_write_private_message`, \n* `career`,\n* `common_count`,\n* `connections`,\n* `contacts`,\n* `city`,\n* `country`,\n* `crop_photo`,\n* `domain`,\n* `education`,\n* `exports`,\n* `followers_count`,\n* `friend_status`,\n* `has_photo`,\n* `has_mobile`,\n* `home_town`,\n* `photo_100`,\n* `photo_200`,\n* `photo_200_orig`,\n* `photo_400_orig`,\n* `photo_50`,\n* `sex`,\n* `site`,\n* `schools`,\n* `screen_name`,\n* `status`,\n* `verified`,\n* `games`,\n* `interests`,\n* `is_favorite`,\n* `is_friend`,\n* `is_hidden_from_feed`,\n* `last_seen`,\n* `maiden_name`,\n* `military`,\n* `movies`,\n* `music`,\n* `nickname`,\n* `occupation`,\n* `online`,\n* `personal`,\n* `photo_id`,\n* `photo_max`,\n* `photo_max_orig`,\n* `quotes`,\n* `relation`,\n* `relatives`,\n* `timezone`,\n* `tv`,\n* `universities`.",
            type: "string",
            is_required: false,
          },
          {
            name: "name_case",
            description:
              "Падеж для склонения имени и фамилии пользователя. \nВозможные значения: \n* именительный – `nom`,\n* родительный – `gen`,\n* дательный – `dat`,\n* винительный – `acc`,\n* творительный – `ins`,\n* предложный – `abl`. \n\nПо умолчанию `nom`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "users.getFollowers",
        description:
          "Возвращает список идентификаторов пользователей, которые являются подписчиками пользователя.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description: "Идентификатор пользователя.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества подписчиков.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество подписчиков, информацию о которых нужно получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).\nДоступные значения: \n* `about`,\n* `activities`, \n* `bdate`, \n* `blacklisted`,\n* `blacklisted_by_me`\n* `books`,\n* `can_post`, \n* `can_see_all_posts`,\n* `can_see_audio`,\n* `can_send_friend_request`,\n* `can_write_private_message`, \n* `career`, \n* `city`,\n* `common_count`, \n* `connections`,\n* `contacts`, \n* `country`,\n* `crop_photo`, \n* `domain`, \n* `education`, \n* `exports`, \n* `followers_count`,\n* `friend_status`,\n* `games`, \n* `has_mobile`,\n* `has_photo`, \n* `home_town`,\n* `interests`, \n* `is_favorite`, \n* `is_friend`, \n* `is_hidden_from_feed`,\n* `last_seen`,\n* `lists`, \n* `maiden_name`,\n* `military`, \n* `movies`, \n* `music`, \n* `nickname`,\n* `occupation`, \n* `online`,\n* `personal`, \n* `photo_100`,\n* `photo_200`, \n* `photo_200_orig`,\n* `photo_400_orig`, \n* `photo_50`,\n* `photo_id`,\n* `photo_max`, \n* `photo_max_orig`,\n* `quotes`,\n* `relation`,\n* `relatives`, \n* `schools`,\n* `screen_name`, \n* `sex`,\n* `site`,\n* `status`,\n* `timezone`, \n* `tv`, \n* `universities`, \n* `verified`,\n* `wall_comments`.",
            type: "string",
            is_required: false,
          },
          {
            name: "name_case",
            description:
              "Падеж для склонения имени и фамилии пользователя. \nВозможные значения: \n* именительный – `nom`,\n* родительный – `gen`,\n* дательный – `dat`,\n* винительный – `acc`,\n* творительный – `ins`,\n* предложный – `abl`.\n\n По умолчанию `nom`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "users.getSubscriptions",
        description:
          "Возвращает список идентификаторов пользователей и публичных страниц, которые входят в список подписок пользователя.",
        access_rights: [],
        params: [
          {
            name: "user_id",
            description:
              "Идентификатор пользователя, подписки которого необходимо получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` – возвращает объединенный список, содержащий объекты [group](reference/objects/group) и [user](reference/objects/user) вместе. `0` – возвращает список идентификаторов групп и пользователей отдельно (по умолчанию).",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение необходимое для выборки определенного подмножества подписок. Этот параметр используется только если передан `extended`=`1`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество подписок, которые необходимо вернуть. Этот параметр используется только если передан `extended`=`1`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей для объектов [user](reference/objects/user) и [group](reference/objects/group), которые необходимо вернуть.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "users.search",
        description:
          "Возвращает список пользователей в соответствии с заданным критерием поиска.",
        access_rights: [],
        params: [
          {
            name: "q",
            description: "Строка поискового запроса. Например, `Вася Бабич`.",
            type: "string",
            is_required: false,
          },
          {
            name: "sort",
            description:
              "Сортировка результатов. Возможные значения:\n* `1` — по дате регистрации,\n* `0` — по популярности.",
            type: "integer",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение относительно первого найденного пользователя для выборки определенного подмножества.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество возвращаемых пользователей.\n\n> Обратите внимание, даже при использовании параметра `offset` для получения информации доступны только первые **1000** результатов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).\nДоступные значения: \n* `about`,\n* `activities`, \n* `bdate`, \n* `blacklisted`,\n* `blacklisted_by_me`\n* `books`,\n* `can_post`, \n* `can_see_all_posts`,\n* `can_see_audio`,\n* `can_send_friend_request`,\n* `can_write_private_message`, \n* `career`, \n* `city`,\n* `common_count`, \n* `connections`,\n* `contacts`, \n* `country`,\n* `crop_photo`, \n* `domain`, \n* `education`, \n* `exports`, \n* `followers_count`,\n* `friend_status`,\n* `games`, \n* `has_mobile`,\n* `has_photo`, \n* `home_town`,\n* `interests`, \n* `is_favorite`, \n* `is_friend`, \n* `is_hidden_from_feed`,\n* `last_seen`,\n* `lists`, \n* `maiden_name`,\n* `military`, \n* `movies`, \n* `music`, \n* `nickname`,\n* `occupation`, \n* `online`,\n* `personal`, \n* `photo_100`,\n* `photo_200`, \n* `photo_200_orig`,\n* `photo_400_orig`, \n* `photo_50`,\n* `photo_id`,\n* `photo_max`, \n* `photo_max_orig`,\n* `quotes`,\n* `relation`,\n* `relatives`, \n* `schools`,\n* `screen_name`, \n* `sex`,\n* `site`,\n* `status`,\n* `timezone`, \n* `tv`, \n* `universities`, \n* `verified`,\n* `wall_comments`.",
            type: "string",
            is_required: false,
          },
          {
            name: "city",
            description: "Идентификатор города.",
            type: "positive",
            is_required: false,
          },
          {
            name: "country",
            description: "Идентификатор страны.",
            type: "positive",
            is_required: false,
          },
          {
            name: "hometown",
            description: "Название города строкой.",
            type: "string",
            is_required: false,
          },
          {
            name: "university_country",
            description:
              "Идентификатор страны, в которой пользователи закончили ВУЗ.",
            type: "positive",
            is_required: false,
          },
          {
            name: "university",
            description: "Идентификатор ВУЗа.",
            type: "positive",
            is_required: false,
          },
          {
            name: "university_year",
            description: "Год окончания ВУЗа.",
            type: "positive",
            is_required: false,
          },
          {
            name: "university_faculty",
            description: "Идентификатор факультета.",
            type: "positive",
            is_required: false,
          },
          {
            name: "university_chair",
            description: "Идентификатор кафедры.",
            type: "positive",
            is_required: false,
          },
          {
            name: "sex",
            description:
              "Пол. Возможные значения:\n*  `1` —  женщина,\n*  `2` — мужчина,\n*  `0` — любой (по умолчанию).",
            type: "positive",
            is_required: false,
          },
          {
            name: "status",
            description:
              "Семейное положение. Возможные значения:\n* `1` — не женат (не замужем),\n* `2` — встречается,\n* `3` — помолвлен(-а),\n* `4` — женат (замужем),\n* `5` — всё сложно,\n* `6` — в активном поиске,\n* `7` — влюблен(-а),\n* `8` — в гражданском браке.",
            type: "positive",
            is_required: false,
          },
          {
            name: "age_from",
            description: "Возраст, от.",
            type: "positive",
            is_required: false,
          },
          {
            name: "age_to",
            description: "Возраст, до.",
            type: "positive",
            is_required: false,
          },
          {
            name: "birth_day",
            description: "День рождения.",
            type: "positive",
            is_required: false,
          },
          {
            name: "birth_month",
            description: "Месяц рождения.",
            type: "positive",
            is_required: false,
          },
          {
            name: "birth_year",
            description: "Год рождения.",
            type: "positive",
            is_required: false,
          },
          {
            name: "online",
            description:
              "Учитывать ли статус «онлайн». Возможные значения:\n* `1` — искать только пользователей онлайн,\n* `0` — искать по всем пользователям.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "has_photo",
            description:
              "Учитывать ли наличие фото. Возможные значения:\n* `1` — искать только пользователей с фотографией,\n* `0` — искать по всем пользователям.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "school_country",
            description:
              "Идентификатор страны, в которой пользователи закончили школу.",
            type: "positive",
            is_required: false,
          },
          {
            name: "school_city",
            description:
              "Идентификатор города, в котором пользователи закончили школу.",
            type: "positive",
            is_required: false,
          },
          {
            name: "school_class",
            description: "Буква класса.",
            type: "positive",
            is_required: false,
          },
          {
            name: "school",
            description: "Идентификатор школы, которую закончили пользователи.",
            type: "positive",
            is_required: false,
          },
          {
            name: "school_year",
            description: "Год окончания школы.",
            type: "positive",
            is_required: false,
          },
          {
            name: "religion",
            description: "Религиозные взгляды.",
            type: "string",
            is_required: false,
          },
          {
            name: "company",
            description: "Название компании, в которой работают пользователи.",
            type: "string",
            is_required: false,
          },
          {
            name: "position",
            description: "Название должности.",
            type: "string",
            is_required: false,
          },
          {
            name: "group_id",
            description:
              "Идентификатор группы, среди пользователей которой необходимо проводить поиск.",
            type: "positive",
            is_required: false,
          },
          {
            name: "from_list",
            description:
              "Разделы среди которых нужно осуществить поиск, перечисленные через запятую. \nВозможные значения:\n* `friends` — искать среди друзей,\n* `subscriptions` — искать среди друзей и подписок пользователя.",
            type: "string",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Utils",
    methods: [
      {
        title: "utils.checkLink",
        description:
          "Возвращает информацию о том, является ли внешняя ссылка заблокированной на сайте ВКонтакте.",
        access_rights: [],
        params: [
          {
            name: "url",
            description:
              "Внешняя ссылка, которую необходимо проверить.\nНапример, `https://google.com`.",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "utils.deleteFromLastShortened",
        description: "Удаляет сокращенную ссылку из списка пользователя.",
        access_rights: [],
        params: [
          {
            name: "key",
            description: "Сокращённая ссылка (часть URL после «vk.cc/»).",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "utils.getLastShortenedLinks",
        description:
          "Получает список сокращённых ссылок для текущего пользователя.",
        access_rights: [],
        params: [
          {
            name: "count",
            description: "Количество ссылок, которые необходимо получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Сдвиг для получения определенного подмножества ссылок.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "utils.getLinkStats",
        description:
          "Возвращает статистику переходов по [сокращённой](utils.getShortLink) ссылке.",
        access_rights: [],
        params: [
          {
            name: "key",
            description: "Сокращённая ссылка (часть URL после «vk.cc/»).",
            type: "string",
            is_required: true,
          },
          {
            name: "source",
            description: "",
            type: "string",
            is_required: false,
          },
          {
            name: "access_key",
            description: "Ключ доступа к приватной статистике ссылки.",
            type: "string",
            is_required: false,
          },
          {
            name: "interval",
            description:
              "Единица времени для подсчета статистики. Возможные значения:\n* `hour` — час;\n* `day` — день;\n* `week` — неделя;\n* `month` — месяц;\n* `forever` — все время с момента создания ссылки.",
            type: "string",
            is_required: false,
          },
          {
            name: "intervals_count",
            description:
              "Длительность периода для получения статистики в выбранных единицах (из параметра `interval`).",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — возвращать расширенную статистику (пол, возраст, страна, город).\n`0` — возвращать только количество переходов.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "utils.getServerTime",
        description:
          "Возвращает текущее время на сервере ВКонтакте в `unixtime`.",
        access_rights: [],
        params: [],
      },
      {
        title: "utils.getShortLink",
        description: "Позволяет получить URL, сокращённый с помощью vk.cc.",
        access_rights: [],
        params: [
          {
            name: "url",
            description:
              "URL, для которого необходимо получить сокращённый вариант.",
            type: "string",
            is_required: true,
          },
          {
            name: "private",
            description:
              "`1` — статистика ссылки приватная. \n`0` — статистика ссылки общедоступная.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "utils.resolveScreenName",
        description:
          "Определяет тип объекта (пользователь, сообщество, приложение) и его идентификатор по короткому имени `screen_name`.",
        access_rights: [],
        params: [
          {
            name: "screen_name",
            description:
              "Короткое имя пользователя, группы или приложения. Например, apiclub, andrew или rules_of_war.",
            type: "string",
            is_required: true,
          },
        ],
      },
    ],
  },
  {
    title: "Video",
    methods: [
      {
        title: "video.add",
        description: "Добавляет видеозапись в список пользователя.",
        access_rights: ["video"],
        params: [
          {
            name: "target_id",
            description:
              "Идентификатор пользователя или сообщества, в которое нужно добавить видео.\n\n> Обратите внимание, идентификатор сообщества в параметре `target_id` необходимо указывать со знаком `«-»` — например, `target_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
          {
            name: "video_id",
            description: "Идентификатор видеозаписи.",
            type: "positive",
            is_required: true,
          },
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит видеозапись.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "video.addAlbum",
        description: "Создает пустой альбом видеозаписей.",
        access_rights: ["video"],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор сообщества (если необходимо создать альбом в сообществе).",
            type: "positive",
            is_required: false,
          },
          {
            name: "title",
            description: "Название альбома.",
            type: "string",
            is_required: false,
          },
          {
            name: "privacy",
            description:
              "Настройки доступа к альбому в [специальном формате](reference/objects/privacy).\nПриватность доступна для альбомов с видео в профиле пользователя.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "video.addToAlbum",
        description: "Позволяет добавить видеозапись в альбом.",
        access_rights: ["video"],
        params: [
          {
            name: "target_id",
            description:
              "Идентификатор владельца альбома, в который нужно добавить видео.\n\n> Обратите внимание, идентификатор сообщества в параметре `target_id` необходимо указывать со знаком `«-»` — например, `target_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
          {
            name: "album_id",
            description:
              "Идентификатор альбома, в который нужно добавить видео.\nДля добавления видео в общий альбом «Добавленные» передавайте `-2`.",
            type: "integer",
            is_required: false,
          },
          {
            name: "album_ids",
            description:
              "Идентификаторы альбомов, в которые нужно добавить видео.",
            type: "string",
            is_required: false,
          },
          {
            name: "owner_id",
            description:
              "Идентификатор владельца видеозаписи.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "video_id",
            description: "Идентификатор видеозаписи.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "video.createComment",
        description: "Cоздает новый комментарий к видеозаписи",
        access_rights: ["video"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит видеозапись.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
          {
            name: "video_id",
            description: "Идентификатор видеозаписи.",
            type: "integer",
            is_required: true,
          },
          {
            name: "message",
            description:
              "Текст комментария. Обязательный параметр, если не задан параметр `attachments`.",
            type: "string",
            is_required: false,
          },
          {
            name: "attachments",
            description:
              "Список объектов, приложенных к комментарию и разделённых символом `«,»`. Поле `attachments` представляется в формате:\n```\n<type><owner_id>_<media_id>,<type><owner_id>_<media_id>\n```\n\n`<type>` — тип медиа-вложения:\n* `photo` — фотография \n* `video` — видеозапись \n* `audio` — аудиозапись \n* `doc` — документ\n\n`<owner_id>` — идентификатор владельца медиа-вложения \n`<media_id>` — идентификатор медиа-вложения. \n\nНапример:\n```\nphoto100172_166443618,photo66748_265827614\n```\n\nПараметр является обязательным, если не задан параметр `message`.",
            type: "string",
            is_required: false,
          },
          {
            name: "from_group",
            description:
              "Этот параметр учитывается, если `owner_id` < `0` (комментарий к видеозаписи группы). `1` — комментарий будет опубликован от имени группы, `0` — комментарий будет опубликован от имени пользователя. по умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "reply_to_comment",
            description:
              "Идентификатор комментария, в ответ на который должен быть добавлен новый комментарий.",
            type: "positive",
            is_required: false,
          },
          {
            name: "sticker_id",
            description: "Идентификатор стикера.",
            type: "positive",
            is_required: false,
          },
          {
            name: "guid",
            description:
              "Уникальный идентификатор, предназначенный для предотвращения повторной отправки одинакового комментария.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "video.delete",
        description: "Удаляет видеозапись со страницы пользователя.",
        access_rights: ["video"],
        params: [
          {
            name: "video_id",
            description: "Идентификатор видеозаписи.",
            type: "positive",
            is_required: true,
          },
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит видеозапись.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
          {
            name: "target_id",
            description:
              "Идентификатор пользователя или сообщества, для которого нужно удалить видеозапись.\n\n> Обратите внимание, идентификатор сообщества в параметре `target_id` необходимо указывать со знаком `«-»` — например, `target_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "video.deleteAlbum",
        description: "Удаляет альбом видеозаписей.",
        access_rights: ["video"],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор сообщества (если альбом, который необходимо удалить, принадлежит сообществу).",
            type: "positive",
            is_required: false,
          },
          {
            name: "album_id",
            description: "Идентификатор альбома.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "video.deleteComment",
        description: "Удаляет комментарий к видеозаписи.",
        access_rights: ["video"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит видеозапись.",
            type: "string",
            is_required: false,
          },
          {
            name: "comment_id",
            description: "Идентификатор комментария.",
            type: "integer",
            is_required: true,
          },
        ],
      },
      {
        title: "video.edit",
        description: "Редактирует данные видеозаписи.",
        access_rights: ["video"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит видеозапись.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
          {
            name: "video_id",
            description: "Идентификатор видеозаписи.",
            type: "integer",
            is_required: true,
          },
          {
            name: "name",
            description: "Новое название для видеозаписи.",
            type: "string",
            is_required: false,
          },
          {
            name: "desc",
            description: "Новое описание для видеозаписи.",
            type: "string",
            is_required: false,
          },
          {
            name: "privacy_view",
            description:
              "Настройки приватности просмотра видеозаписи в [специальном формате](reference/objects/privacy). Приватность доступна для видеозаписей, которые пользователь загрузил в профиль.",
            type: "string",
            is_required: false,
          },
          {
            name: "privacy_comment",
            description:
              "Настройки приватности комментирования видеозаписи в [специальном формате](reference/objects/privacy).\nПриватность доступна для видеозаписей, которые пользователь загрузил в профиль.",
            type: "string",
            is_required: false,
          },
          {
            name: "no_comments",
            description: "Закрыть комментарии (для видео из сообществ).",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "repeat",
            description: "Зацикливание воспроизведения видеозаписи.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "video.editAlbum",
        description: "Редактирует альбом с видео.",
        access_rights: ["video"],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор сообщества (если нужно отредактировать альбом, принадлежащий сообществу).",
            type: "positive",
            is_required: false,
          },
          {
            name: "album_id",
            description: "Идентификатор альбома.",
            type: "positive",
            is_required: true,
          },
          {
            name: "title",
            description: "Новое название для альбома.",
            type: "string",
            is_required: true,
          },
          {
            name: "privacy",
            description:
              "Уровень доступа к альбому в [специальном формате](reference/objects/privacy).\nПриватность доступна для альбомов с видео в профиле пользователя.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "video.editComment",
        description: "Изменяет текст комментария к видеозаписи.",
        access_rights: ["video"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит видеозапись.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
          {
            name: "comment_id",
            description: "Идентификатор комментария.",
            type: "integer",
            is_required: true,
          },
          {
            name: "message",
            description:
              "Новый текст комментария. Обязательный параметр, если не задан параметр `attachments`.",
            type: "string",
            is_required: false,
          },
          {
            name: "attachments",
            description:
              "Новый список объектов, приложенных к комментарию и разделённых символом `«,»`. Поле `attachments` представляется в формате:\n\n```\n<type><owner_id>_<media_id>,<type><owner_id>_<media_id>\n```\n\n`<type>` — тип медиа-вложения:\n* `photo` — фотография,\n* `video` — видеозапись,\n* `audio` — аудиозапись,\n* `doc` — документ.\n\n`<owner_id>` — идентификатор владельца медиа-вложения \n`<media_id>` — идентификатор медиа-вложения. \n\nНапример:\n```\nphoto100172_166443618,photo66748_265827614`\n```\nОбязательный параметр, если не задан параметр `message`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "video.get",
        description: "Возвращает информацию о видеозаписях.",
        access_rights: ["video"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежат видеозаписи.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «-» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
          {
            name: "videos",
            description:
              "Перечисленные через запятую идентификаторы — идущие через знак подчеркивания `id` пользователей, которым принадлежат видеозаписи, и `id` самих видеозаписей. Если видеозапись принадлежит сообществу, то в качестве первого параметра используется `-id` сообщества.\n\nПример значения `videos`:\n\n```\n-4363_136089719,13245770_137352259\n```\n\nНекоторые видеозаписи, идентификаторы которых могут быть получены через API, закрыты приватностью, и не будут получены. В этом случае следует использовать ключ доступа [access_key](reference/objects) в её идентификаторе. \n\nПример значения `videos`:\n\n```\n1_129207899_`220df2876123d3542f`, 6492_135055734_`e0a9bcc31144f67fbd`\n```\n\nПоле `access_key` будет возвращено вместе с остальными данными видеозаписи в методах, которые возвращают видеозаписи, закрытые приватностью, но доступные в данном контексте. Например, данное поле имеют видеозаписи, возвращаемые методом [messages.get](method/messages.get).",
            type: "string",
            is_required: false,
          },
          {
            name: "album_id",
            description:
              "Идентификатор альбома, видеозаписи из которого нужно вернуть.",
            type: "integer",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество возвращаемых видеозаписей.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение относительно первой найденной видеозаписи для выборки определённого подмножества.",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "Определяет, возвращать ли информацию о настройках приватности видео для текущего пользователя.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "fields",
            description: "",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "video.getAlbumById",
        description: "Позволяет получить информацию об альбоме с видео.",
        access_rights: ["video"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит альбом.",
            type: "string",
            is_required: false,
          },
          {
            name: "album_id",
            description: "Идентификатор альбома.",
            type: "integer",
            is_required: true,
          },
        ],
      },
      {
        title: "video.getAlbums",
        description:
          "Возвращает список альбомов видеозаписей пользователя или сообщества.",
        access_rights: ["video"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца альбомов (пользователь или сообщество). По умолчанию — идентификатор текущего пользователя.",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества альбомов. По умолчанию: `0`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество альбомов, информацию о которых нужно вернуть. По умолчанию: не больше 50, максимальное значение: 100.",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description:
              '`1`— возвращать дополнительные поля `count`, `updated_time` и массив объектов `image` для каждого альбома. Если альбом пустой, то массив объектов `image` для него возвращен не будет. По умолчанию: `0`.\nПоля объекта `image`:\n* `"height"` (`integer`) — Высота изображения.\n\n* `"url"` (`string`) — Ссылка на изображение.\n\n* `"width"` (`integer`) — Ширина изображение.\n\n* `"with_padding"` (`integer`) — Поле возвращается, если изображение с отбивкой, всегда содержит `1`.',
            type: "checkbox",
            is_required: false,
          },
          {
            name: "need_system",
            description: "`1` — возвращать системные альбомы.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "video.getAlbumsByVideo",
        description:
          "Возвращает список альбомов, в которых находится видеозапись.",
        access_rights: ["video"],
        params: [
          {
            name: "target_id",
            description:
              "Идентификатор пользователя или сообщества, для которого нужно получить список альбомов, содержащих видеозапись.\n\n> Обратите внимание, идентификатор сообщества в параметре `target_id` необходимо указывать со знаком `«-»` — например, `target_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
          {
            name: "owner_id",
            description:
              "Идентификатор владельца видеозаписи.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "video_id",
            description: "Идентификатор видеозаписи.",
            type: "positive",
            is_required: true,
          },
          {
            name: "extended",
            description: "`1` — возвращать расширенную информацию об альбомах.",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "video.getComments",
        description: "Возвращает список комментариев к видеозаписи.",
        access_rights: ["video"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит видеозапись.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
          {
            name: "video_id",
            description: "Идентификатор видеозаписи.",
            type: "positive",
            is_required: true,
          },
          {
            name: "need_likes",
            description:
              "`1` — будет возвращено дополнительное поле `likes`. По умолчанию поле `likes` не возвращается.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "start_comment_id",
            description:
              "Идентификатор комментария, начиная с которого нужно вернуть список (подробности см. ниже).",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества комментариев. По умолчанию: `0`.",
            type: "integer",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество комментариев, информацию о которых необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
          {
            name: "sort",
            description:
              "Порядок сортировки комментариев. Возможные значения:\n* `asc` — от старых к новым;\n* `desc` — от новых к старым.",
            type: "string",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — в ответе будут возвращены дополнительные поля `profiles` и `groups`, содержащие информацию о пользователях и сообществах. По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "fields",
            description: "",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "video.getNewTags",
        description:
          "Возвращает список видеозаписей, на которых есть непросмотренные отметки.",
        access_rights: ["video"],
        params: [
          {
            name: "offset",
            description:
              "Смещение, необходимое для получения определённого подмножества видеозаписей.",
            type: "integer",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество видеозаписей, которые необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "video.getTags",
        description: "Возвращает список отметок на видеозаписи.",
        access_rights: ["video"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца видеозаписи (пользователь или сообщество). По умолчанию — идентификатор текущего пользователя.",
            type: "string",
            is_required: false,
          },
          {
            name: "video_id",
            description: "Идентификатор видеозаписи.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "video.moveToAlbum",
        description: "Перемещает видеозаписи в альбом.",
        access_rights: ["video"],
        params: [
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, которому принадлежат видеозаписи. Если параметр не указан, то работа ведется с альбомом текущего пользователя.",
            type: "integer",
            is_required: false,
          },
          {
            name: "album_id",
            description:
              "Идентификатор альбома, в который перемещаются видеозаписи.",
            type: "integer",
            is_required: false,
          },
          {
            name: "video_ids",
            description: "Список идентификаторов видеороликов.",
            type: "string",
            is_required: true,
          },
        ],
      },
      {
        title: "video.putTag",
        description: "Добавляет отметку на видеозапись.",
        access_rights: ["video"],
        params: [
          {
            name: "user_id",
            description: "Идентификатор пользователя, которого нужно отметить.",
            type: "positive",
            is_required: true,
          },
          {
            name: "owner_id",
            description:
              "Идентификатор владельца видеозаписи (пользователь или сообщество). По умолчанию — идентификатор текущего пользователя.",
            type: "positive",
            is_required: false,
          },
          {
            name: "video_id",
            description: "Идентификатор видеозаписи.",
            type: "positive",
            is_required: true,
          },
          {
            name: "tagged_name",
            description: "Текст отметки.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "video.removeFromAlbum",
        description: "Позволяет убрать видеозапись из альбома.",
        access_rights: ["video"],
        params: [
          {
            name: "target_id",
            description:
              "Идентификатор владельца альбома.\n\n> Обратите внимание, идентификатор сообщества в параметре `target_id` необходимо указывать со знаком `«-»` — например, `target_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
          {
            name: "album_id",
            description:
              "Идентификатор альбома, из которого нужно убрать видео.",
            type: "integer",
            is_required: false,
          },
          {
            name: "album_ids",
            description:
              "Идентификаторы альбомов, из которых нужно убрать видео.",
            type: "string",
            is_required: false,
          },
          {
            name: "owner_id",
            description:
              "Идентификатор владельца видеозаписи.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: true,
          },
          {
            name: "video_id",
            description: "Идентификатор видеозаписи.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "video.removeTag",
        description: "Удаляет отметку с видеозаписи.",
        access_rights: ["video"],
        params: [
          {
            name: "tag_id",
            description: "Идентификатор отметки.",
            type: "integer",
            is_required: true,
          },
          {
            name: "owner_id",
            description:
              "Идентификатор владельца видеозаписи (пользователь или сообщество). По умолчанию — идентификатор текущего пользователя.",
            type: "positive",
            is_required: false,
          },
          {
            name: "video_id",
            description: "Идентификатор видеозаписи.",
            type: "positive",
            is_required: true,
          },
        ],
      },
      {
        title: "video.reorderAlbums",
        description: "Позволяет изменить порядок альбомов с видео.",
        access_rights: ["video"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит альбом.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
          {
            name: "album_id",
            description: "Идентификатор альбома, который нужно переместить.",
            type: "positive",
            is_required: true,
          },
          {
            name: "before",
            description:
              "Идентификатор альбома, перед которым нужно поместить текущий.",
            type: "positive",
            is_required: false,
          },
          {
            name: "after",
            description:
              "Идентификатор альбома, после которого нужно поместить текущий.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "video.reorderVideos",
        description: "Позволяет переместить видеозапись в альбоме.",
        access_rights: ["video"],
        params: [
          {
            name: "target_id",
            description:
              "Идентификатор пользователя или сообщества, в чьем альбоме нужно переместить видео.\n\n> Обратите внимание, идентификатор сообщества в параметре `target_id` необходимо указывать со знаком `«-»` — например, `target_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
          {
            name: "album_id",
            description:
              "Идентификатор альбома с видеозаписью, которую нужно переместить.",
            type: "integer",
            is_required: false,
          },
          {
            name: "owner_id",
            description:
              "Идентификатор владельца видеозаписи, которую нужно переместить (пользователь или сообщество).",
            type: "integer",
            is_required: true,
          },
          {
            name: "video_id",
            description:
              "Идентификатор видеозаписи, которую нужно переместить.",
            type: "positive",
            is_required: true,
          },
          {
            name: "before_owner_id",
            description:
              "Идентификатор владельца видеозаписи, перед которой следует поместить текущую (пользователь или сообщество).",
            type: "integer",
            is_required: false,
          },
          {
            name: "before_video_id",
            description:
              "Идентификатор видеозаписи, перед которой следует поместить текущую.",
            type: "positive",
            is_required: false,
          },
          {
            name: "after_owner_id",
            description:
              "Идентификатор владельца видеозаписи, после которой следует поместить текущую (пользователь или сообщество).",
            type: "integer",
            is_required: false,
          },
          {
            name: "after_video_id",
            description:
              "Идентификатор видеозаписи, после которой следует поместить текущую.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "video.restore",
        description: "Восстанавливает удаленную видеозапись.",
        access_rights: ["video"],
        params: [
          {
            name: "video_id",
            description: "Идентификатор видеозаписи.",
            type: "positive",
            is_required: true,
          },
          {
            name: "owner_id",
            description:
              "Идентификатор владельца видеозаписи (пользователь или сообщество).\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "video.restoreComment",
        description: "Восстанавливает удаленный комментарий к видеозаписи.",
        access_rights: ["video"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, которому принадлежит видеозапись.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "string",
            is_required: false,
          },
          {
            name: "comment_id",
            description: "Идентификатор удаленного комментария.",
            type: "integer",
            is_required: true,
          },
        ],
      },
      {
        title: "video.save",
        description:
          "Возвращает адрес сервера, необходимый для [загрузки](api/upload), и данные видеозаписи.",
        access_rights: ["video"],
        params: [
          {
            name: "name",
            description: "Название видеофайла.",
            type: "string",
            is_required: false,
          },
          {
            name: "description",
            description: "Описание видеофайла.",
            type: "string",
            is_required: false,
          },
          {
            name: "is_private",
            description:
              "Указывается `1`, если видео загружается для отправки личным сообщением. После загрузки с этим параметром видеозапись не будет отображаться в списке видеозаписей пользователя и не будет доступна другим пользователям по её идентификатору. По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "wallpost",
            description:
              "Требуется ли после сохранения опубликовать запись с видео на стене (`1` — требуется, `0` — не требуется).\n\n> Обратите внимание, для публикации записи на стене приложение должно иметь права `wall`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "link",
            description:
              "URL для встраивания видео с внешнего сайта, например, с YouTube. В этом случае нужно вызвать полученный `upload_url`, не прикрепляя файл, достаточно просто обратиться по этому адресу.",
            type: "string",
            is_required: false,
          },
          {
            name: "group_id",
            description:
              "Идентификатор сообщества, в которое будет сохранён видеофайл. По умолчанию файл сохраняется на страницу текущего пользователя.",
            type: "positive",
            is_required: false,
          },
          {
            name: "album_id",
            description:
              "Идентификатор альбома, в который будет загружен видео файл.",
            type: "positive",
            is_required: false,
          },
          {
            name: "privacy_view",
            description:
              "Настройки приватности просмотра видеозаписи в [специальном формате](reference/objects/privacy). Приватность доступна для видеозаписей, которые пользователь загрузил в профиль.",
            type: "string",
            is_required: false,
          },
          {
            name: "privacy_comment",
            description:
              "Настройки приватности комментирования видеозаписи в [специальном формате](reference/objects/privacy).\nПриватность доступна для видеозаписей, которые пользователь загрузил в профиль.",
            type: "string",
            is_required: false,
          },
          {
            name: "no_comments",
            description:
              "`1` — закрыть комментарии (для видео из сообществ). По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "repeat",
            description: "Зацикливание воспроизведения видеозаписи.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "compression",
            description: "",
            type: "checkbox",
            is_required: false,
          },
        ],
      },
      {
        title: "video.search",
        description:
          "Возвращает список видеозаписей в соответствии с заданным критерием поиска.",
        access_rights: ["video"],
        params: [
          {
            name: "q",
            description:
              "Строка поискового запроса. Например, `The Beatles`.\nПоиск по пустому запросу возможен только при наличии `owner_id`.\n",
            type: "string",
            is_required: false,
          },
          {
            name: "sort",
            description:
              "Сортировка результатов. \nВозможные значения:\n* `0` — по дате добавления видеозаписи,\n* `1` — по длительности,\n* `2` — по релевантности,\n* `3` — по количеству просмотров.\n",
            type: "integer",
            is_required: false,
          },
          {
            name: "hd",
            description:
              "Если не равен нулю, то поиск производится только по видеозаписям высокого качества.",
            type: "integer",
            is_required: false,
          },
          {
            name: "adult",
            description:
              "Фильтр «Безопасный поиск». Возможные значения:\n* `1` — выключен,\n* `0` — включен.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "live",
            description: "",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "filters",
            description:
              "Список критериев, по которым требуется отфильтровать видео:\n* `mp4` — искать только видео в формате .mp4 (воспроизводимое на iOS),\n* `youtube` — возвращать только YouTube видео,\n* `vimeo` — возвращать только Vimeo видео,\n* `short` — возвращать только короткие видеозаписи,\n* `long` — возвращать только длинные видеозаписи.",
            type: "string",
            is_required: false,
          },
          {
            name: "search_own",
            description:
              "`1` — искать по видеозаписям пользователя, `0` — не искать по видеозаписям пользователя. По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение относительно первой найденной видеозаписи для выборки определённого подмножества.",
            type: "positive",
            is_required: false,
          },
          {
            name: "longer",
            description:
              "Количество секунд, видеозаписи длиннее которого необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
          {
            name: "shorter",
            description:
              "Количество секунд, видеозаписи короче которого необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество возвращаемых видеозаписей.\n\n> Обратите внимание — даже при использовании параметра `offset` для получения информации доступны только первые 1000 результатов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — в ответе будут возвращены дополнительные поля `profiles` и `groups`, содержащие информацию о пользователях и сообществах. По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "owner_id",
            description: "",
            type: "integer",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Wall",
    methods: [
      {
        title: "wall.editAdsStealth",
        description: "Позволяет отредактировать скрытую запись.",
        access_rights: ["ads"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца стены (идентификатор сообщества нужно указывать со знаком «минус»).",
            type: "integer",
            is_required: false,
          },
          {
            name: "post_id",
            description: "Идентификатор записи.",
            type: "positive",
            is_required: true,
          },
          {
            name: "message",
            description: "Текст записи.",
            type: "text",
            is_required: false,
          },
          {
            name: "attachments",
            description:
              "Список объектов, приложенных к записи и разделённых символом `«,»`. Поле `attachments` представляется в формате:\n\n```\n<type><owner_id>_<media_id>,<type><owner_id>_<media_id>\n```\n\n`<type>` — тип медиа-приложения:\n* `photo` — фотография; \n* `video` — видеозапись ;\n* `audio` — аудиозапись; \n* `doc` — документ;\n* `page` — wiki-страница;\n* `note` — заметка;\n* `poll` — опрос;\n* `album` — альбом;\n* `market` — товар;\n* `market_album` — подборка товаров. \n\n`<owner_id>` — идентификатор владельца медиа-приложения (обратите внимание, если объект находится в сообществе, этот параметр должен быть отрицательным). \n`<media_id>` — идентификатор медиа-приложения. \n\nНапример:\n\n```\nphoto100172_166443618,photo-1_265827614\n```\n\nТакже в поле `attachments` может быть указана ссылка на внешнюю страницу, которую Вы хотите разместить в записи, например:\n\n```\nphoto66748_265827614,http://habrahabr.ru\n```\n\nВ качестве ссылки может быть использован телефонный номер  в формате `tel:+71234567890`\n\nПри попытке приложить больше одной ссылки будет возвращена ошибка. \n\nПараметр является обязательным, если не задан параметр `message`.",
            type: "string",
            is_required: false,
          },
          {
            name: "signed",
            description:
              "`1` — у записи, размещенной от имени сообщества, будет добавлена подпись (имя пользователя, разместившего запись), `0` — без подписи.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "lat",
            description:
              "Географическая широта отметки, заданная в градусах (от -90 до 90).",
            type: "string",
            is_required: false,
          },
          {
            name: "long",
            description:
              "Географическая долгота отметки, заданная в градусах (от -180 до 180).",
            type: "string",
            is_required: false,
          },
          {
            name: "place_id",
            description: "Идентификатор места.",
            type: "positive",
            is_required: false,
          },
          {
            name: "link_button",
            description:
              "Идентификатор кнопки, которую необходимо добавить к сниппету для ссылки. Подробнее см. документацию метода wall.postAdsStealth.",
            type: "string",
            is_required: false,
          },
          {
            name: "link_title",
            description:
              "Заголовок, который должен быть использован для сниппета. Если не указан, будет автоматически получен с целевой ссылки. Обязательно указывать в случае, если ссылка является номером телефона.",
            type: "string",
            is_required: false,
          },
          {
            name: "link_image",
            description:
              "Ссылка на изображение, которое должно быть использовано для сниппета. Минимальное разрешение: **537x240**. Если не указана, будет автоматически загружена с целевой ссылки. Обязательно указывать в случае, если ссылка является номером телефона. Одновременно может быть указан либо параметр `link_image`, либо параметр `link_video`.",
            type: "string",
            is_required: false,
          },
          {
            name: "link_video",
            description:
              "Идентификатор видео в формате `<owner_id>_<media_id>`. Одновременно может быть указан либо параметр `link_image`, либо параметр `link_video`. Кроме того, параметр `link_video` может быть указан только вместе с параметрами `link_button`, `link_title`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "wall.get",
        description:
          "Возвращает список записей со стены пользователя или сообщества.",
        access_rights: [],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, со стены которого необходимо получить записи (по умолчанию — текущий пользователь).\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «-» — например, `owner_id` = `-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1)",
            type: "integer",
            is_required: false,
          },
          {
            name: "domain",
            description: "Короткий адрес пользователя или сообщества.",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определённого подмножества записей.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество записей, которое необходимо получить. Максимальное значение: 100.",
            type: "positive",
            is_required: false,
          },
          {
            name: "filter",
            description:
              "Определяет, какие типы записей на стене необходимо получить. Возможные значения:\n* `suggests` — предложенные записи на стене сообщества (доступно только при вызове с передачей `access_token`);\n* `postponed` — отложенные записи (доступно только при вызове с передачей `access_token`);\n* `owner` — записи владельца стены;\n* `others` — записи не от владельца стены;\n* `all` — все записи на стене (`owner` + `others`).\nПо умолчанию: `all`.",
            type: "string",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — в ответе будут возвращены дополнительные поля `profiles` и `groups`, содержащие информацию о пользователях и сообществах. По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей для [профилей](reference/objects/user) и [сообществ](reference/objects/group), которые необходимо вернуть.\nОбратите внимание, этот параметр учитывается только при `extended`= `1`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "wall.getById",
        description:
          "Возвращает список записей со стен пользователей или сообществ по их идентификаторам.",
        access_rights: [],
        params: [
          {
            name: "posts",
            description:
              "Перечисленные через запятую идентификаторы, которые представляют собой идущие через знак подчеркивания ID владельцев стен и ID самих записей на стене. Максимум **100** идентификаторов.\n\nПример значения posts:\n```\n93388_21539,93388_20904,-1_340364\n```",
            type: "string",
            is_required: true,
          },
          {
            name: "extended",
            description:
              "`1` — в ответе будут возвращены дополнительные поля `profiles` и `groups`, содержащие информацию о пользователях и сообществах. По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "copy_history_depth",
            description:
              "Определяет размер массива `copy_history`, возвращаемого в ответе, если запись является репостом записи с другой стены. \n\nНапример, `copy_history_depth`=`1` — `copy_history` будет содержать один элемент с информацией о записи, прямым репостом которой является текущая.\n`copy_history_depth`=`2` — `copy_history` будет содержать два элемента, добавляется информация о записи, репостом которой является первый элемент, и так далее (при условии, что иерархия репостов требуемой глубины для текущей записи существует).",
            type: "integer",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей для профилей и  групп, которые необходимо вернуть. См. [описание полей объекта user](reference/objects/user) и [описание полей объекта group](reference/objects/group).\nОбратите внимание, этот параметр учитывается только при `extended`=`1`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "wall.getComment",
        description: "Получает информацию о комментарии на стене.",
        access_rights: ["wall"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца стены (для сообществ — со знаком «минус»).",
            type: "integer",
            is_required: false,
          },
          {
            name: "comment_id",
            description: "Идентификатор комментария.",
            type: "positive",
            is_required: true,
          },
          {
            name: "extended",
            description:
              "`1` — в ответе будут возвращены дополнительные поля `profiles` и `groups`, содержащие информацию о пользователях и сообществах. По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей для [профилей](reference/objects/user) и [сообществ](reference/objects/group), которые необходимо вернуть.\nОбратите внимание, этот параметр учитывается только при `extended`=`1`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "wall.getComments",
        description: "Возвращает список комментариев к записи на стене.",
        access_rights: ["wall"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца страницы (пользователь или сообщество).\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «-» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1)",
            type: "integer",
            is_required: false,
          },
          {
            name: "post_id",
            description: "Идентификатор записи на стене.",
            type: "positive",
            is_required: false,
          },
          {
            name: "need_likes",
            description: "`1` — возвращать информацию о лайках.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "start_comment_id",
            description:
              "Идентификатор комментария, начиная с которого нужно вернуть список (подробности смотрите ниже).",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Сдвиг, необходимый для получения конкретной выборки результатов.",
            type: "integer",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Число комментариев, которые необходимо получить. По умолчанию: 10, максимальное значение: 100.",
            type: "positive",
            is_required: false,
          },
          {
            name: "sort",
            description:
              "Порядок сортировки комментариев. Возможные значения:\n* `asc` — от старых к новым,\n* `desc` — от новых к старым.",
            type: "string",
            is_required: false,
          },
          {
            name: "preview_length",
            description:
              "Количество символов, по которому нужно обрезать текст комментария. Укажите `0`, если вы не хотите обрезать текст.",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — в ответе будут возвращены дополнительные поля `profiles` и `groups`, содержащие информацию о пользователях и сообществах. По умолчанию — `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей для [профилей](reference/objects/user) и [сообществ](reference/objects/group), которые необходимо вернуть.\nОбратите внимание, этот параметр учитывается только при `extended`=`1`.",
            type: "string",
            is_required: false,
          },
          {
            name: "comment_id",
            description:
              "Идентификатор комментария, ветку которого нужно получить.",
            type: "positive",
            is_required: false,
          },
          {
            name: "thread_items_count",
            description: "Максимальное число элементов в поле `thread`.",
            type: "integer",
            is_required: false,
          },
        ],
      },
      {
        title: "wall.getLikes",
        description:
          "Получает информацию о пользователях, которые добавили указанную запись в свой список **Мне нравится**.",
        access_rights: ["wall"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, на стене которого размещена запись. Если параметр не задан, то он считается равным идентификатору текущего пользователя.",
            type: "integer",
            is_required: false,
          },
          {
            name: "post_id",
            description: "Идентификатор записи на стене.",
            type: "positive",
            is_required: true,
          },
          {
            name: "published_only",
            description:
              "Указывает, что необходимо вернуть информацию только о пользователях, опубликовавших данную запись у себя на стене (по умолчанию **0**).",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "friends_only",
            description:
              "Указывает, что необходимо вернуть информацию только о пользователях, которые являются друзьями текущего пользователя (по умолчанию **0**).",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, относительно начала списка, для выборки определенного подмножества (по умолчанию **0**).",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description:
              "Количество возвращаемых идентификаторов пользователей. \nЕсли параметр не задан, то при отсутствии `friends_only`=`1` считается, что он равен 100, в противном случае 10. \nМаксимальное значение параметра — 1000, если не задан параметр `friends_only`=`1`, в противном случае 100.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "wall.getPhotoUploadServer",
        description:
          "Возвращает адрес сервера для загрузки фотографии на стену пользователя.",
        access_rights: [],
        params: [],
      },
      {
        title: "wall.getReposts",
        description: "Позволяет получать список репостов заданной записи.",
        access_rights: [],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества, на стене которого находится запись. Если параметр не задан, то он считается равным идентификатору текущего пользователя.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1).",
            type: "integer",
            is_required: false,
          },
          {
            name: "post_id",
            description: "Идентификатор записи на стене.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимое для выборки определенного подмножества записей.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество записей, которое необходимо получить.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "wall.postAdsStealth",
        description:
          "Позволяет создать скрытую запись, которая не попадает на стену сообщества и в дальнейшем может быть использована  для создания рекламного объявления типа «Запись в сообществе».",
        access_rights: ["ads"],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор владельца стены (идентификатор сообщества нужно указывать со знаком «минус»).",
            type: "integer",
            is_required: true,
          },
          {
            name: "message",
            description: "Текст записи.",
            type: "text",
            is_required: false,
          },
          {
            name: "attachments",
            description:
              "Список объектов, приложенных к записи и разделённых символом `«,»`.\n\nВ поле может быть указана ссылка на страницу, которую Вы хотите разместить в записи, например:\n\n```\nphoto66748_265827614,http://habrahabr.ru\n```\n\nЛибо поле attachments представляется в формате:\n\n```\n<type><owner_id>_<media_id>,<type><owner_id>_<media_id>\n```\n\n`<type>` — тип медиа-приложения:\n* `photo` — фотография; \n* `video` — видеозапись;\n* `audio` — аудиозапись; \n* `doc` — документ;\n* `page` — wiki-страница;\n* `note` — заметка;\n* `poll` — опрос;\n* `album` — альбом;\n* `market` — товар;\n* `market_album` — подборка товаров,\n* `pretty_card` — карточка карусели. \n\n`<owner_id>` — идентификатор владельца медиа-приложения (обратите внимание, если объект находится в сообществе, этот параметр должен быть отрицательным). \n`<media_id>` — идентификатор медиа-приложения. \n\nНапример:\n\n```\nphoto100172_166443618,photo-1_265827614\n```\n\nВ качестве ссылки может быть использован телефонный номер  в формате `tel:+71234567890`.\n\nПри попытке приложить больше одной ссылки будет возвращена ошибка. \n\nПараметр является обязательным, если не задан параметр `message`.",
            type: "string",
            is_required: false,
          },
          {
            name: "signed",
            description:
              "`1` — у записи, размещенной от имени сообщества, будет добавлена подпись (имя пользователя, разместившего запись), `0` — без подписи.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "lat",
            description:
              "Географическая широта отметки, заданная в градусах (от -90 до 90).",
            type: "string",
            is_required: false,
          },
          {
            name: "long",
            description:
              "Географическая долгота отметки, заданная в градусах (от -180 до 180).",
            type: "string",
            is_required: false,
          },
          {
            name: "place_id",
            description: "Идентификатор места.",
            type: "positive",
            is_required: false,
          },
          {
            name: "guid",
            description:
              "Уникальный идентификатор, предназначенный для предотвращения повторной отправки одинаковой записи.",
            type: "string",
            is_required: false,
          },
          {
            name: "link_button",
            description:
              "Идентификатор кнопки, которую необходимо добавить к сниппету для ссылки.\n\n | **link_button** | **Текст** | **Действие** | **Тип ссылок** |\n|---|---|---|---|\n | `auto` | (автовыбор) | (автовыбор) | Все |\n | `app_join` | Запустить | Переход по ссылке | Приложения и игры |\n | `app_game_join` | Играть | Переход по ссылке | Игры |\n | `open_url` | Перейти | Переход по ссылке | Внешние сайты, сообщества, приложения |\n | `open` | Открыть | Переход по ссылке | Внешние сайты |\n | `more` | Подробнее | Переход по ссылке | Сообщества |\n | `call` | Позвонить | Набор номера | Телефонные номера |\n | `book` | Забронировать | Набор номера | Телефонные номера |\n | `enroll` | Записаться | Переход по ссылке или набор номера | Внешние сайты, телефонные номера |\n | `register` | Зарегистрироваться | Набор номера | Телефонные номера |\n | `buy` | Купить | Переход по ссылке | Внешние сайты |\n | `buy_ticket` | Купить билет | Переход по ссылке | Внешние сайты |\n | `order` | Заказать | Переход по ссылке | Внешние сайты |\n | `create` | Создать | Переход по ссылке | Внешние сайты |\n | `install` | Установить | Переход по ссылке | Внешние сайты |\n | `contact` | Связаться | Переход по ссылке | Внешние сайты |\n | `fill` | Заполнить | Переход по ссылке | Внешние сайты |\n | `join_public` | Подписаться | Подписка на публичную страницу | Публичные страницы |\n | `join_event` | Я пойду | Участие в мероприятии | События |\n | `join` | Вступить | Вступление в сообщество | Сообщества |\n | `im` | Связаться | Переход к диалогу с сообществом | Сообщества, публичные страницы, события |\n | `im2` | Написать | Переход к диалогу с сообществом | Сообщества, публичные страницы, события |\n | `begin` | Начать | Переход по ссылке | Внешние сайты |\n | `get` | Получить | Переход по ссылке | Внешние сайты |\n | `watch` | Смотреть | Переход по ссылке | Внешние сайты |\n | `download` | Скачать | Переход по ссылке | Внешние сайты |\n | `participate` | Участвовать | Переход по ссылке | Внешние сайты |\n | `play` | Играть | Переход по ссылке | Внешние сайты |\n | `apply` | Подать заявку | Переход по ссылке | Внешние сайты |\n | `get_an_offer` | Получить предложение | Переход по ссылке | Внешние сайты |\n | `to_write` | Написать | Переход по ссылке | Внешние сайты |\n | `reply` | Откликнуться | Переход по ссылке | Внешние сайты |",
            type: "string",
            is_required: false,
          },
          {
            name: "link_title",
            description:
              "Заголовок, который должен быть использован для сниппета. Если не указан, будет автоматически получен с целевой ссылки. Обязательно указывать в случае, если ссылка является номером телефона.",
            type: "string",
            is_required: false,
          },
          {
            name: "link_image",
            description:
              "Ссылка на изображение, которое должно быть использовано для сниппета. Минимальное разрешение: **537x240**. Если не указана, будет автоматически загружена с целевой ссылки. Обязательно указывать в случае, если ссылка является номером телефона. Одновременно может быть указан либо параметр `link_image`, либо параметр `link_video`.",
            type: "string",
            is_required: false,
          },
          {
            name: "link_video",
            description:
              "Идентификатор видео в формате `<owner_id>_<media_id>`. Одновременно может быть указан либо параметр `link_image`, либо параметр `link_video`. Кроме того, параметр `link_video` может быть указан только вместе с параметрами `link_button`, `link_title`.",
            type: "string",
            is_required: false,
          },
        ],
      },
      {
        title: "wall.search",
        description:
          "Позволяет искать записи на стене в соответствии с заданными критериями.",
        access_rights: [],
        params: [
          {
            name: "owner_id",
            description:
              "Идентификатор пользователя или сообщества.\n\n> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1)",
            type: "integer",
            is_required: false,
          },
          {
            name: "domain",
            description: "Короткий адрес пользователя или сообщества.",
            type: "string",
            is_required: false,
          },
          {
            name: "query",
            description:
              "Поисковой запрос. Для точного результата запрос необходимо передавать в двойных кавычках.",
            type: "string",
            is_required: false,
          },
          {
            name: "owners_only",
            description:
              "`1` — возвращать только записи от имени владельца стены.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество записей, которые необходимо вернуть.",
            type: "positive",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение, необходимо для получения определенного подмножества результатов.",
            type: "positive",
            is_required: false,
          },
          {
            name: "extended",
            description:
              "`1` — в ответе будут возвращены дополнительные поля `profiles` и `groups`, содержащие информацию о пользователях и сообществах. По умолчанию: `0`.",
            type: "checkbox",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Список дополнительных полей для профилей и групп, которые необходимо вернуть. См. [описание полей объекта user](reference/objects/user) и [описание полей объекта group](reference/objects/group).\nОбратите внимание, этот параметр учитывается только при `extended`=`1`.",
            type: "string",
            is_required: false,
          },
        ],
      },
    ],
  },
  {
    title: "Widgets",
    methods: [
      {
        title: "widgets.getComments",
        description:
          "Получает список комментариев к странице, оставленных через Виджет комментариев.",
        access_rights: [],
        params: [
          {
            name: "widget_api_id",
            description:
              "Идентификатор приложения/сайта, с которым инициализируются виджеты.",
            type: "integer",
            is_required: false,
          },
          {
            name: "url",
            description: "URL-адрес страницы.",
            type: "string",
            is_required: false,
          },
          {
            name: "page_id",
            description:
              "Внутренний идентификатор страницы в приложении/сайте (в случае, если для инициализации виджетов использовался параметр `page_id`).",
            type: "string",
            is_required: false,
          },
          {
            name: "order",
            description:
              "Тип сортировки комментариев. Возможные значения: `date`, `likes`, `last_comment`. Значение по умолчанию — `date`.",
            type: "string",
            is_required: false,
          },
          {
            name: "fields",
            description:
              "Перечисленные через запятую поля анкет необходимые для получения. Если среди полей присутствует `replies`, будут возвращены последние комментарии второго уровня для каждого комментария первого уровня.",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение необходимое для выборки определенного подмножества комментариев. По умолчанию `0`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество возвращаемых записей.",
            type: "positive",
            is_required: false,
          },
        ],
      },
      {
        title: "widgets.getPages",
        description:
          "Получает список страниц приложения/сайта, на которых установлен [Виджет комментариев](widgets/comments) или [«Мне нравится»](widgets/like).",
        access_rights: [],
        params: [
          {
            name: "widget_api_id",
            description:
              "Идентификатор приложения/сайта, с которым инициализируются виджеты.",
            type: "integer",
            is_required: false,
          },
          {
            name: "order",
            description:
              "Тип сортировки страниц. Возможные значения: `date`, `comments`, `likes`, `friend_likes`.",
            type: "string",
            is_required: false,
          },
          {
            name: "period",
            description:
              "Период выборки. Возможные значения: `day`, `week`, `month`, `alltime`.",
            type: "string",
            is_required: false,
          },
          {
            name: "offset",
            description:
              "Смещение необходимое для выборки определенного подмножества комментариев. По умолчанию `0`.",
            type: "positive",
            is_required: false,
          },
          {
            name: "count",
            description: "Количество возвращаемых записей.",
            type: "positive",
            is_required: false,
          },
        ],
      },
    ],
  },
];
