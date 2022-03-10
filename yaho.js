const webdriver = require('selenium-webdriver'); 
const { By } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome');
const schedule = require('node-schedule');

require('dotenv').config();

const checkin = async () => { 

  const options = new chrome.Options()

  options.addArguments('--disable-dev-shm-usage')
  options.addArguments('--no-sandbox')
  options.addArguments('--headless')
  // 1. chromedriver 경로 설정 
  // chromedriver가 있는 경로를 입력 
  const service = new chrome.ServiceBuilder('./chromedriver.exe').build(); 
  chrome.setDefaultService(service); 
  

  // 2. chrome 브라우저 빌드 
  const driver = await new webdriver.Builder() 
  .forBrowser('chrome') 
  .setChromeOptions(options)
  .build(); 
  
  // 3. google 사이트 열기 
   
  await page()
  // 3.1 css로 값 가져오기
  
  
  async function page() {
    //페이지에 대한 콘솔

    await driver.get('https://hanghae99.spartacodingclub.kr/round/5/checks');
    
    let login = await driver.findElement(By.className('btn btn-email'))
    await login.click();
    let email = await driver.findElement(By.id('email'))
    await email.sendKeys(process.env.ID)
    let goLogin = await driver.findElement(By.className('btn btn-signup btn-login'))
    await goLogin.click();
    setTimeout(async () => { 
        await driver.findElement(By.id('password')).sendKeys(process.env.PASSWORD)
    
        await goLogin.click();

        setTimeout(async () => { 
            
          await driver.findElement(By.className('button start')).click();
            setTimeout(async () => { 
              await driver.findElement(By.className('btn-cta')).click();

              await driver.close();
              await driver.quit(); 
              console.log("체크인 성공")
                 
              }, 3000); 
          }, 5000); 
      }, 5000); 
    
    
  }

} 


schedule.scheduleJob('00 46 03 * * *', function(){
    checkin();
  });


  const checkout = async () => { 

    const options = new chrome.Options()
  
    options.addArguments('--disable-dev-shm-usage')
    options.addArguments('--no-sandbox')
    options.addArguments('--headless')
    // 1. chromedriver 경로 설정 
    // chromedriver가 있는 경로를 입력 
    const service = new chrome.ServiceBuilder('./chromedriver.exe').build(); 
    chrome.setDefaultService(service); 
    
  
    // 2. chrome 브라우저 빌드 
    const driver = await new webdriver.Builder() 
    .forBrowser('chrome') 
    .setChromeOptions(options)
    .build(); 
    
    // 3. google 사이트 열기 
     
    await page()
    // 3.1 css로 값 가져오기
    
    
    async function page() {
      //페이지에 대한 콘솔
  
      await driver.get('https://hanghae99.spartacodingclub.kr/round/5/checks');
      
      let login = await driver.findElement(By.className('btn btn-email'))
      await login.click();
      let email = await driver.findElement(By.id('email'))
      await email.sendKeys(process.env.ID)
      let goLogin = await driver.findElement(By.className('btn btn-signup btn-login'))
      await goLogin.click();
      setTimeout(async () => { 
          await driver.findElement(By.id('password')).sendKeys(process.env.PASSWORD)
      
          await goLogin.click();
  
          setTimeout(async () => { 
              
              await driver.findElement(By.className('button stop')).click();
              setTimeout(async () => { 
                  await driver.findElement(By.className('btn-cta')).click();
                  
                  await driver.close();
                  await driver.quit(); 
                  console.log("체크아웃 성공")
                }, 3000); 
            }, 5000); 
        }, 5000); 
      
      
    }
  
  } 
  
  
  schedule.scheduleJob('30 46 03 * * *', function(){
    checkout()
    });