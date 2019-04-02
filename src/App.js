import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Grid, Button, Container, Divider, Flag, Header, Image, Icon, Input, Label } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
      <Container textAlign="justified">
        <p>
        Perusahaan mana yang tidak ingin blog di situs webnya update secara berkala,
        berisi konten-konten relevan dan berkualitas, dikunjungi banyak pembaca,
        dan dibagikan beratus atau beribu kali? Sejak Google menyatakan bahwa faktor
        utama peringkat situs web adalah kualitas kontennya, maka bisa dipastikan bahwa
        semakin berkualitas sebuah konten maka ranking yang semakin baik. Ranking yang
        semakin baik maka akan semakin tinggi trafik. Semakin tinggi trafik maka akan semakin banyak pembaca.
        Semakin banyak pembaca artinya jangkauan promosi yang lebih luas. Dan seterusnya, dan seterusnya.
        Namun, sebuah konten berkualitas tentu tidak dapat dihasilkan tanpa adanya seorang content writer yang berkualitas pula,
        bukan? Itu sebabnya mengapa sebelum Anda meng-hire jasa seorang content writer,
        ada beberapa hal yang sebaiknya Anda pertimbangkan.
        </p>
      <Divider horizontal>Batas</Divider>
      </Container>
        <Grid container columns={3}>
          <Grid.Column>
            <Button primary>Kirim Pertama</Button>
            <Button secondary>Kirim kedua</Button>
          </Grid.Column>
          <Grid.Column>
            <Flag name="id"/>
            <Flag name="indonesia"/>
          </Grid.Column>
            <Header as="h3" color="red">
              <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png"/>
                Emil Fitranshah
            </Header>
          <Grid.Column>3</Grid.Column>
        </Grid>
        <Container textAlign="center">
          <Icon name="spinner" size="big" loading/>
        </Container>
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png "
          size="tiny"
          href="https://google.com"
          target="_blank"
        />
        <Input type="text" placeholder="search" icon={<Icon name="search"/>}/>
        <Label pointing="left">Mesin Pencarian</Label>
      </div>
    );
  }
}

export default App;
