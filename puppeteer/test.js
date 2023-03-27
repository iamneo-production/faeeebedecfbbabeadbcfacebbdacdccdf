const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
        await page.goto('https://8081-faeeebedecfbbabeadbcfacebbdacdccdf.project.examly.io');
        await page.setViewport({
        width:1200,
        height:800,
        })
		
		await page.waitForSelector('#headerContainer', {timeout : 1500});
		
        console.log('TESTCASE:test_case1:success');
    }
     catch(e){
		console.log('TESTCASE:test_case1:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
  
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
        await page.goto('https://8081-faeeebedecfbbabeadbcfacebbdacdccdf.project.examly.io');
        await page.setViewport({
        width:1200,
        height:800,
        })
		
		await page.waitForSelector('#searchBox', {timeout : 1500});
		await page.waitForSelector('#newFood', {timeout : 1500});
		
        console.log('TESTCASE:test_case2:success');
    }
     catch(e){
		console.log('TESTCASE:test_case2:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
  
   (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
        await page.goto('https://8081-faeeebedecfbbabeadbcfacebbdacdccdf.project.examly.io');
        await page.setViewport({
        width:1200,
        height:800,
        })
		
		await page.waitForSelector('#name', {timeout : 1500});
		await page.waitForSelector('#calories', {timeout : 1500});
		await page.waitForSelector('#image', {timeout : 1500});
		await page.waitForSelector('#displayContainer', {timeout : 1500});
        console.log('TESTCASE:test_case3:success');
    }
     catch(e){
		console.log('TESTCASE:test_case3:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
    (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
        await page.goto('https://8081-faeeebedecfbbabeadbcfacebbdacdccdf.project.examly.io');
        await page.setViewport({
        width:1200,
        height:800,
        })
		
		await page.waitForSelector('#searchBox', {timeout : 1500});
		await page.waitForSelector('#newFood', {timeout : 1500});
		
        console.log('TESTCASE:test_case4:success');
    }
     catch(e){
		console.log('TESTCASE:test_case4:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
  
   (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
        await page.goto('https://8081-faeeebedecfbbabeadbcfacebbdacdccdf.project.examly.io');
        await page.setViewport({
        width:1200,
        height:800,
        })
		
		await page.type('#searchBox','Apple')
		await page.waitForSelector('#displayContainer', {timeout : 1500});
        console.log('TESTCASE:test_case5:success');
    }
     catch(e){
		console.log('TESTCASE:test_case5:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();