let data = [
  {
    id: 1,
    panel: "panel1",
    api_method: "GET",
    api_name: "List of matching websites and there ranks",
    api_route: "/search/query/<q>/clusterno/<int:clusterno>",
    request_textArea: "http://13.235.90.61:5000/search/query/bank/",
    response_textArea:
      "\n {\n [{url: https://bankifsccode.com, rank: 12398.0},\n { url: https://banksifsccode.com, rank: 15573.0 }\n ...\n ] \n}\n"
  },
  {
    id: 2,
    panel: "panel2",
    api_method: "GET",
    api_name: "List of matching domain websites and there ranks",
    api_route: "/search/domain/<d>/",
    request_textArea: "http://13.235.90.61:5000/search/domain/microsoft/",
    response_textArea:
      "\n [{url: https://microsoft.com, rank: 3.0},\n{ url: https://microsoftstore.com.cn, rank: 6425.0 },\n { url: https://microsoft365.com, rank: 4697.0 } \n...\n]\n"
  },

  {
    id: 3,
    panel: "panel3",
    api_method: "GET",
    api_name:
      "Top 20 urls(based on rank) and their 1 day change from asked cluster",
    api_route: "/getclusterurl/<cluster_id>/page/<page_no>",
    request_textArea: " http://13.235.90.61:5000/getclusterurl/4",
    response_textArea:
      "\n[{url: https://nike.com, rank: 1140.0, change: 3.0},\n { url: https://flipkart.com, rank: 1404.0, change: -25.0 }\n ...\n]"
  },
  {
    id: 4,
    panel: "panel4",
    api_method: "GET",
    api_name: "List of keyword the cluster url belongs to",
    api_route: "/<url>/0",
    request_textArea: "http://13.235.90.61:5000/https://www.google.com/0 \n",
    response_textArea:
      "\n {\n keywords: [\nmarketing,\n media, \n team,\n work,\nsolution,\n digital,\nbusiness,\n website,\n brand,\n company\n],\n status: success,\n websites: []\n }\n"
  },
  {
    id: 5,
    panel: "panel5",
    api_method: "GET",
    api_name:
      "List of keyword and 10 similar website the cluster url belongs to",
    api_route: "/<url>/1",
    request_textArea: "http://13.235.90.61:5000/https://www.google.com/1 \n",
    response_textArea:
      "\n {\n keywords: [\nmarketing,\n media, \n team,\n work,\nsolution,\n digital,\nbusiness,\n website,\n brand,\n company\n],\n status: success,\n  websites:[\n https://google.com,\n https://googl.com,\n https://digitalpoint.com,\n ...... \n status: success,\n cluster_no: 93\n }\n"
  },
  {
    id: 6,
    panel: "panel6",
    api_method: "GET",
    api_name: "List of cluster object",
    api_route: "/getclusterurl/page/pageNo",
    request_textArea: "http://13.235.90.61:5000/getclusterurl/page/4",
    response_textArea:
      " \n{sites: [\n{ url: https://apple.com, rank: 10, change: -4, approx: 0, cluster: 35 },\n { url: https://skype.com, rank: 14, change: 1, approx: 0, cluster: 18 },\n { url: https://office365.com, rank: 19, change: 7, approx: 0, cluster: 18 }\n....\n.....{ url: https://yahoo.com, rank: 24, : 4,change approx: 0, cluster: 77 }],\nmax_page: 22329\n }\n"
  },

  {
    id: 7,
    panel: "panel7",
    api_method: "GET",
    api_name: "Get list of matching cluster data between given dates",
    api_route: "/getClusterData/<startDate>/<endDate>/<int:cluster_no>",
    request_textArea:
      "http://13.235.90.61:5000/getClusterData/2020-05-05/2020-05-07/23 \n",
    response_textArea:
      "\n[\n{\n rank: 83574,\n\n keywords: service business company development customer marketing solution learn technology digital,\n size: 2793,\n \ndate: 2020-05-05\n },\n {\n rank: 76889,\n  keywords: service business company development customer marketing solution learn technology digital,\n .....\n....\n]\n"
  },
  {
    id: 8,
    panel: "panel8",
    api_method: "GET",
    api_name: "Get list of one day matching cluster data",
    api_route: "/getOneDayClusterData/<endDate>/<int:cluster_no>",
    request_textArea:
      "http://13.235.90.61:5000/getOneDayClusterData/2020-05-07/23 \n",
    response_textArea:
      "\n [   {\ndate: 2020-05-07,\n rank: 78062,\n size: 2797,\n keywords: service business company development customer marketing solution learn technology digital,\n rankChange: 1173,\n sizeChange: -20 \n}\n ]\n"
  },
  {
    id: 9,
    panel: "panel9",
    api_method: "GET",
    api_name: "Get cluster info",
    api_route: "/getClusterInfo/<int:cluster_no>",
    request_textArea: "http://13.235.90.61:5000/getClusterInfo/100 \n",
    response_textArea:
      "\n {\nkeywords: school student learn program parent education academic university read campus,\n urls:\n [\n                https://goguardian.com,\n                https://managebac.com,\n                https://collegenet.com,\n                ..... \n ]\n}\n"
  },
  {
    id: 10,
    panel: "panel10",
    api_method: "GET",
    api_name: "Get all cluster info between given date ",
    api_route: " /getAllClusterData/<strDate>/<endDate>",
    request_textArea:
      "http://13.235.90.61:5000/getAllClusterData/2020-05-03/2020-05-04 \n",
    response_textArea:
      "\n[\n{ \n date: 2020-05-04,\n size: 931,\n size_change: 21,\n cluster_no: 1,\n cluster_name: Software,\n primary: 80552,\n secondary: -6322\n }\n .....\n  {\n date: 2020-05-04,\n size: 2548,\n size_change: 55,\n cluster_no: 100,\n cluster_name: Student,\n primary: 58511,\n secondary: -2159\n       }\n ] \n"
  }
];

export default data;
