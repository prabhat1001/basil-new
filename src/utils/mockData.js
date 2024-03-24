const orderObj = [
    {
      orderID: "101",
      date: "21-03-23",
      time: "13:58:21",
      machineName: "Aahaar Stalls",
      machineID: "102",
      machineNo: "23",
      customerDetails: {
        name: "Simranjeet Kaur",
        contact: "9999999999",
        email: "simarjeet.kaur@basil.health",
      },
      totalAmt: "199",
      status: "success",
      paymentID: "TX1042480129481",
      refundID: "TX52736840142548",
      details: [
        {
          custID: "101",
          drinkName: "Mix Berry Smoothie",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
        {
          custID: "010",
          drinkName: "Blueberry Fruit Punch",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund initiated",
          action: false,
        },
        {
          custID: "011",
          drinkName: "Pineapple Mojito",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund completed",
          action: false,
        },
        {
          custID: "110",
          drinkName: "Mint Lemonade",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
      ],
    },
    {
      orderID: "100",
      date: "21-03-23",
      time: "13:57:12",
      machineName: "Aahaar Stalls",
      machineID: "103",
      machineNo: "37",
      customerDetails: {
        name: "Simranjeet Kaur",
        contact: "9999999999",
        email: "simarjeet.kaur@basil.health",
      },
      totalAmt: "99",
      status: "failure",
      paymentID: "TX1042480129481",
      refundID: "TX52736840142548",
      details: [
        {
          custID: "101",
          drinkName: "Mix Berry Smoothie",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
        {
          custID: "010",
          drinkName: "Blueberry Fruit Punch",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund initiated",
          action: false,
        },
        {
          custID: "011",
          drinkName: "Pineapple Mojito",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund completed",
          action: false,
        },
        {
          custID: "110",
          drinkName: "Mint Lemonade",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
      ],
    },
    {
      orderID: "099",
      date: "21-03-23",
      time: "13:56:32",
      machineName: "Aahaar Stalls",
      machineID: "104",
      machineNo: "88",
      customerDetails: {
        name: "Simranjeet Kaur",
        contact: "9999999999",
        email: "simarjeet.kaur@basil.health",
      },
      totalAmt: "298",
      status: "pending",
      paymentID: "TX1042480129481",
      refundID: "TX52736840142548",
      details: [
        {
          custID: "101",
          drinkName: "Mix Berry Smoothie",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
        {
          custID: "010",
          drinkName: "Blueberry Fruit Punch",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund initiated",
          action: false,
        },
        {
          custID: "011",
          drinkName: "Pineapple Mojito",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund completed",
          action: false,
        },
        {
          custID: "110",
          drinkName: "Mint Lemonade",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
      ],
    },
    {
      orderID: "098",
      date: "21-03-23",
      time: "13:54:50",
      machineName: "Aahaar Stalls",
      machineID: "104",
      machineNo: "88",
      customerDetails: {
        name: "Simranjeet Kaur",
        contact: "9999999999",
        email: "simarjeet.kaur@basil.health",
      },
      totalAmt: "345",
      status: "sent",
      paymentID: "TX1042480129481",
      refundID: "TX52736840142548",
      details: [
        {
          custID: "101",
          drinkName: "Mix Berry Smoothie",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
        {
          custID: "010",
          drinkName: "Blueberry Fruit Punch",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund initiated",
          action: false,
        },
        {
          custID: "011",
          drinkName: "Pineapple Mojito",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund completed",
          action: false,
        },
        {
          custID: "110",
          drinkName: "Mint Lemonade",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
      ],
    },
    {
      orderID: "097",
      date: "21-03-23",
      time: "13:54:32",
      machineName: "Aahaar Stalls",
      machineID: "104",
      machineNo: "88",
      customerDetails: {
        name: "Simranjeet Kaur",
        contact: "9999999999",
        email: "simarjeet.kaur@basil.health",
      },
      totalAmt: "666",
      status: "refund initiated",
      paymentID: "TX1042480129481",
      refundID: "TX52736840142548",
      details: [
        {
          custID: "101",
          drinkName: "Mix Berry Smoothie",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
        {
          custID: "010",
          drinkName: "Blueberry Fruit Punch",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund initiated",
          action: false,
        },
        {
          custID: "011",
          drinkName: "Pineapple Mojito",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund completed",
          action: false,
        },
        {
          custID: "110",
          drinkName: "Mint Lemonade",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
      ],
    },
    {
      orderID: "096",
      date: "21-03-23",
      time: "13:43:33",
      machineName: "Aahaar Stalls",
      machineID: "105",
      machineNo: "76",
      customerDetails: {
        name: "Simranjeet Kaur",
        contact: "9999999999",
        email: "simarjeet.kaur@basil.health",
      },
      totalAmt: "765",
      status: "refund completed",
      paymentID: "TX1042480129481",
      refundID: "TX52736840142548",
      details: [
        {
          custID: "101",
          drinkName: "Mix Berry Smoothie",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
        {
          custID: "010",
          drinkName: "Blueberry Fruit Punch",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund initiated",
          action: false,
        },
        {
          custID: "011",
          drinkName: "Pineapple Mojito",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund completed",
          action: false,
        },
        {
          custID: "110",
          drinkName: "Mint Lemonade",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
      ],
    },
    {
      orderID: "095",
      date: "21-03-23",
      time: "13:30:48",
      machineName: "Aahaar Stalls",
      machineID: "104",
      machineNo: "88",
      customerDetails: {
        name: "Simranjeet Kaur",
        contact: "9999999999",
        email: "simarjeet.kaur@basil.health",
      },
      totalAmt: "328",
      status: "success",
      paymentID: "TX1042480129481",
      refundID: "TX52736840142548",
      details: [
        {
          custID: "101",
          drinkName: "Mix Berry Smoothie",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
        {
          custID: "010",
          drinkName: "Blueberry Fruit Punch",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund initiated",
          action: false,
        },
        {
          custID: "011",
          drinkName: "Pineapple Mojito",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund completed",
          action: false,
        },
        {
          custID: "110",
          drinkName: "Mint Lemonade",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
      ],
    },
    {
      orderID: "094",
      date: "21-03-23",
      time: "13:30:15",
      machineName: "Aahaar Stalls",
      machineID: "104",
      machineNo: "88",
      customerDetails: {
        name: "Simranjeet Kaur",
        contact: "9999999999",
        email: "simarjeet.kaur@basil.health",
      },
      totalAmt: "199",
      status: "success",
      paymentID: "TX1042480129481",
      refundID: "TX52736840142548",
      details: [
        {
          custID: "101",
          drinkName: "Mix Berry Smoothie",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
        {
          custID: "010",
          drinkName: "Blueberry Fruit Punch",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund initiated",
          action: false,
        },
        {
          custID: "011",
          drinkName: "Pineapple Mojito",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund completed",
          action: false,
        },
        {
          custID: "110",
          drinkName: "Mint Lemonade",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
      ],
    },
    {
      orderID: "093",
      date: "21-03-23",
      time: "13:28:32",
      machineName: "Aahaar Stalls",
      machineID: "104",
      machineNo: "88",
      customerDetails: {
        name: "Simranjeet Kaur",
        contact: "9999999999",
        email: "simarjeet.kaur@basil.health",
      },
      totalAmt: "199",
      status: "success",
      paymentID: "TX1042480129481",
      refundID: "TX52736840142548",
      details: [
        {
          custID: "101",
          drinkName: "Mix Berry Smoothie",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
        {
          custID: "010",
          drinkName: "Blueberry Fruit Punch",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund initiated",
          action: false,
        },
        {
          custID: "011",
          drinkName: "Pineapple Mojito",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund completed",
          action: false,
        },
        {
          custID: "110",
          drinkName: "Mint Lemonade",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
      ],
    },
    {
      orderID: "092",
      date: "21-03-23",
      time: "13:20:18",
      machineName: "Aahaar Stalls",
      machineID: "104",
      machineNo: "88",
      customerDetails: {
        name: "Simranjeet Kaur",
        contact: "9999999999",
        email: "simarjeet.kaur@basil.health",
      },
      totalAmt: "499",
      status: "success",
      paymentID: "TX1042480129481",
      refundID: "TX52736840142548",
      details: [
        {
          custID: "101",
          drinkName: "Mix Berry Smoothie",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
        {
          custID: "010",
          drinkName: "Blueberry Fruit Punch",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund initiated",
          action: false,
        },
        {
          custID: "011",
          drinkName: "Pineapple Mojito",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "refund completed",
          action: false,
        },
        {
          custID: "110",
          drinkName: "Mint Lemonade",
          customization: "Low Honey",
          amt: "199",
          drinkStatus: "success",
          action: true,
        },
      ],
    },
  ];
  
  export default orderObj;
  