import { OrderDetailModel, OrderModel } from "./../models/OrderModel";

export const activeOrderData: OrderModel[] = [
  {
    id: 0,
    product_id: 0,
    status: {
      type: "delivering",
    },
    description: "Доставка: сегодня, 13:30-15:45",
  },
  {
    id: 1,
    product_id: 1,
    status: {
      type: "new_order",
    },
    description: "Ожидаем курьера",
  },
  {
    id: 2,
    product_id: 2,
    status: {
      type: "waiting_courier",
    },
    description: "Доставка: завтра, 20:00-21:30",
  },
  {
    id: 3,
    product_id: 3,
    status: {
      type: "delivered",
    },
    description: "Заберите товар у курьера",
  },
  {
    id: 4,
    product_id: 4,
    status: {
      type: "pickup",
      description: "Нужно забрать: сегодня, до 19:00",
      time: "15:46",
    },
    description:
      "Если вы не заберете товар вовремя, сделка будет аннулирована, а деньги будут возвращены",
  },
];

export const notActiveOrderData: OrderModel[] = [
  {
    id: 5,
    product_id: 5,
    status: {
      type: "rejected",
    },
    description: "Завершен 28 октября, 14:53",
  },
  {
    id: 6,
    product_id: 6,
    status: {
      type: "client_received",
    },
    description: "Доставлен: сегодня, 12:30",
  },
  {
    id: 7,
    product_id: 7,
    status: {
      type: "you_received",
    },
    description: "Доставлен: 28 оклября 2021",
  },
];

export const orderDetailData: OrderDetailModel[] = [
  {
    id: 0,
    order_id: 0,
    type: "seller",
    buyer_phone: "+99890 919 13 04",
    address: "Ташкент, ул Ивлиева, 12",
    order_date: "2022-07-02T20:20",
    steps: [
      {
        id: 0,
        title: "courier_took_product",
        date: "2022-07-04T11:31",
        status: "done",
      },
      {
        id: 1,
        title: "product_on_way",
        date: "2022-07-04T12:14",
        status: "pending",
      },
      {
        id: 2,
        title: "buyer_get_product",
        date: "2022-07-04",
        status: "not_awailable",
      },
    ],
  },
  {
    id: 1,
    order_id: 1,
    type: "seller",
    buyer_phone: "+99090 919 13 04",
    address: "Ташкент ул. Мирзо Улугбек",
    order_date: "2022-07-02T20:20",
  },
  {
    id: 2,
    order_id: 2,
    type: "buyer",
    deliver_date: "2022-07-19T14:26",
    address: "Ташкент ул. Мирзо Улугбек",
    order_date: "2022-07-02T20:20",
    steps: [
      {
        id: 0,
        title: "order_formed",
        date: "2022-07-04T11:31",
        status: "done",
      },
      {
        id: 1,
        title: "waiting_for_courier",
        date: "2022-07-04T12:53",
        status: "pending",
      },
      {
        id: 2,
        title: "courier_on_way",
        date: "2022-07-04T13:24",
        status: "on_way",
      },
      {
        id: 3,
        title: "arrived",
        date: "2022-07-04T14:42",
        status: "not_awailable",
      },
    ],
  },
  {
    id: 3,
    order_id: 3,
    type: "buyer",
    deliver_date: "2022-07-19T14:26",
    address: "Ташкент ул. Мирзо Улугбек",
    order_date: "2022-07-02T20:20",
    steps: [
      {
        id: 0,
        title: "order_formed",
        date: "2022-07-04T11:30",
        status: "done",
      },
      {
        id: 1,
        title: "waiting_for_courier",
        date: "2022-07-04T12:10",
        status: "done",
      },
      {
        id: 2,
        title: "courier_on_way",
        date: "2022-07-04T13:42",
        status: "done",
      },
      {
        id: 3,
        title: "arrived",
        date: "2022-07-04T11:13",
        status: "done",
      },
    ],
  },
  {
    id: 4,
    order_id: 4,
    type: "pickup",
    buyer_phone: "+99090 919 13 04",
    address: "Ташкент ул. Мирзо Улугбек",
    order_date: "2022-07-02T20:20",
  },
  {
    id: 5,
    order_id: 5,
    type: "seller",
    buyer_phone: "+99090 919 13 04",
    address: "Ташкент ул. Мирзо Улугбек",
    order_date: "2022-07-02T20:20",
    steps: [
      {
        id: 0,
        title: "courier_took_product",
        date: "2022-06-22T11:34",
        status: "done",
      },
      {
        id: 1,
        title: "courier_on_way",
        date: "2022-06-22T12:21",
        status: "done",
      },
      {
        id: 2,
        title: "buyer_get_product",
        date: "2022-06-22T12:21",
        status: "rejected",
      },
    ],
  },
  {
    id: 6,
    order_id: 6,
    type: "seller",
    deliver_date: "2022-07-19T14:26",
    address: "Ташкент ул. Мирзо Улугбек",
    order_date: "2022-07-02T20:20",
    steps: [
      {
        id: 0,
        title: "courier_took_product",
        date: "2022-06-22T11:34",
        status: "done",
      },
      {
        id: 1,
        title: "courier_on_way",
        date: "2022-06-22T12:21",
        status: "done",
      },
      {
        id: 2,
        title: "buyer_get_product",
        date: "2022-06-22T12:21",
        status: "done",
      },
    ],
  },
  {
    id: 7,
    order_id: 7,
    type: "buyer",
    buyer_phone: "+99090 919 13 04",
    address: "Ташкент ул. Мирзо Улугбек",
    order_date: "2022-07-02T20:20",
    steps: [
      {
        id: 0,
        title: "order_formed",
        date: "2022-06-22T11:34",
        status: "done",
      },
      {
        id: 1,
        title: "waiting_for_courier",
        date: "2022-06-22T12:21",
        status: "done",
      },
      {
        id: 2,
        title: "product_on_way",
        date: "2022-06-22T12:21",
        status: "done",
      },
      {
        id: 3,
        title: "arrived",
        date: "2022-06-22T13:46",
        status: "done",
      },
    ],
  },
  {
    id: 8,
    order_id: 8,
    type: "buyer",
    deliver_date: "2022-07-11T21:40",
    address: "Ташкент ул. Мирзо Улугбек",
    order_date: "2022-07-02T20:20",
    steps: [
      {
        id: 0,
        title: "order_formed",
        date: "2022-06-22T11:34",
        status: "done",
      },
      {
        id: 1,
        title: "waiting_for_courier",
        date: "2022-06-22T12:21",
        status: "done",
      },
      {
        id: 2,
        title: "product_on_way",
        date: "2022-06-22T12:21",
        status: "done",
      },
      {
        id: 3,
        title: "arrived",
        date: "2022-06-22-T13:46",
        status: "done",
      },
    ],
  },
];
