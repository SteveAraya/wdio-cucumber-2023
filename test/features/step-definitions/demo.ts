import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function(){

    console.log("Before opening browser...")
    await browser.url("https://www.google.com");
    await browser.pause(1000);
    console.log("After opening browser...")

})

When(/^Search with (.*)/, async function(searchItem){

    console.log(`>> searchItem: ${searchItem}`);
    let elem = await $(`[name=q]`);
    await elem.setValue(searchItem);
    await browser.keys("Enter");

})

Then(/^Click on the first search result$/, async function(){

    let elem = await $(`<h3>`);
    await elem.click();

})

Then(/^URL should match (.*)$/, async function(expectedURL){

    console.log(`>> expectedURL: ${expectedURL}`);
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedURL)

})

/**
 * Web Interactions
 */

Given(/^A web page is opened$/, async function(){

    await browser.url("/inputs");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();

})

When(/^Perform web interactions$/, async function(){

    let num = 12345;
    let strNum = num.toString();

    let elem = await $(`[type=number]`);
    await elem.click();

    for (let i = 0; i < strNum.length; i++) {

        let charStr = strNum.charAt(i);
        await browser.pause();
        await browser.keys(charStr);

    }

})