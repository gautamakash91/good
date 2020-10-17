import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography
} from "@material-ui/core";
import React from "react";
import ns from "./ns.png";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          "_id": "5d43dd713232290edcdc165c",
          "domain_name": "Android",
          "price": 9440,
          "short_description": "Learn Android app development and reach over 2 billion android users around the globe.",
          "domain_image": "https://firebasestorage.googleapis.com/v0/b/nextstacks.appspot.com/o/domain_svg_lite_icons%2Fic_android.svg?alt=media&token=da16e45f-a20e-4b06-9586-b0e74bf24e87",
          "cover_image": "https://firebasestorage.googleapis.com/v0/b/nextstacks.appspot.com/o/domain_background%2Fandroid.webp?alt=media&token=091d9731-cf0f-45fa-a55a-2a4ee56f4486",
          "disabled": false
        },
        {
          "_id": "5d442f9285583a49b5db2877",
          "domain_name": "React JS",
          "price": 10620,
          "short_description": "Create responsive user interface in your web application using the popular React JS library",
          "domain_image": "https://firebasestorage.googleapis.com/v0/b/nextstacks.appspot.com/o/domain_svg_lite_icons%2Fic_react.svg?alt=media&token=2851bbc3-916b-449b-a529-49c6c937c5ed",
          "cover_image": "https://firebasestorage.googleapis.com/v0/b/nextstacks.appspot.com/o/domain_background%2Freact.webp?alt=media&token=e7fc6e99-31d3-4d73-bcf1-fab03d366163",
          "disabled": false
        },
        {
          "_id": "5f56dbaf97b0de1ba6bbedde",
          "domain_name": "HTML, CSS and JS",
          "price": 10000,
          "short_description": "In this course you will learn how to create webpages, style them and make them dynamic using JS.",
          "domain_image": "https://firebasestorage.googleapis.com/v0/b/nextstacks.appspot.com/o/domain_svg_lite_icons%2Fic_webdev.svg?alt=media&token=2616f8e7-c77e-4745-b894-0159347df960",
          "disabled": false
        },
        {
          "_id": "5d4402a003e2832e8cc1c2c2",
          "domain_name": "Python",
          "price": 6490,
          "short_description": "Learn the language behind the machine learning and AI revolution.",
          "domain_image": "https://firebasestorage.googleapis.com/v0/b/nextstacks.appspot.com/o/domain_svg_lite_icons%2Fic_python.svg?alt=media&token=b0bd6558-ca3d-4f28-9df9-91b8aac0fe84",
          "cover_image": "https://firebasestorage.googleapis.com/v0/b/nextstacks.appspot.com/o/domain_background%2Fpython_bg.jpg?alt=media&token=60d01181-5b63-45cb-831c-00386959ff25",
          "disabled": false
        },
        {
          "_id": "5eaf8c468cafe6059e9e577c",
          "domain_name": "Git",
          "price": 0,
          "short_description": "Learn how to add your project to a Git Repository and have the files constantly synced to the cloud and keep the code updated.",
          "domain_image": "https://firebasestorage.googleapis.com/v0/b/nextstacks.appspot.com/o/domain_svg_lite_icons%2Fic_git.svg?alt=media&token=3b437fa7-e58c-4ed5-b6cf-629f7e71f690",
          "cover_image": "https://firebasestorage.googleapis.com/v0/b/nextstacks.appspot.com/o/domain_background%2Freact.webp?alt=media&token=e7fc6e99-31d3-4d73-bcf1-fab03d366163",
          "disabled": false
        },
        {
          "_id": "5ee077fd4e8dbc5e2c261212",
          "domain_name": "MySQL",
          "price": 5000,
          "short_description": "MySQL is one of the most popular relational databases used in the industry.",
          "domain_image": "https://firebasestorage.googleapis.com/v0/b/nextstacks.appspot.com/o/domain_svg_lite_icons%2Fic_mysql.svg?alt=media&token=225bd395-e9a9-446e-ad98-6f3941a0107b",
          "cover_image": "https://firebasestorage.googleapis.com/v0/b/nextstacks.appspot.com/o/domain_background%2Freact.webp?alt=media&token=e7fc6e99-31d3-4d73-bcf1-fab03d366163",
          "disabled": false
        }
      ]
    }
  }

  // componentDidMount() {
  //   fetch("https://api.nextstacks.com/v1/get_active_domains", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({

  //     }),
  //   }).then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log(responseJson.result)
  //       if (responseJson.status) {
  //         this.setState({
  //           data: responseJson.result
  //         })
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <img
            src={ns}
            style={{ width: 100, height: 77 }}
            alt={"nextstacks logo"}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h5"
          >
            NEXTSTACKS DOMAINS
          </Typography>
        </Grid>
        <List>
          {this.state.data.map((s, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar
                  alt={s.domain_image}
                  src={s.domain_image}
                  style={{
                    height: 40,
                    width: 40
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={s.domain_name}
                secondary={s.short_description}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    )
  }
}