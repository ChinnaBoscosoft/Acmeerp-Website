# PowerShell script to rename all images per SEO Excel mapping
# Run: cd 'c:/xampp/htdocs/Acmeerp-Website/acme_erp/src/assets/img' ; powershell -ExecutionPolicy Bypass -File '../.. /scripts/rename-images.ps1'

$imgDir = 'c:/xampp/htdocs/Acmeerp-Website/acme_erp/src/assets/img'

# Hero dir
Rename-Item "$imgDir/hero/acount1.png" "nonprofit-accounting-software-dashboard.png" -ErrorAction Stop
Rename-Item "$imgDir/hero/acount2.png" "nonprofit-accounting-software-interface.png" 
Rename-Item "$imgDir/hero/acount3.png" "ngo-accounting-software-dashboard.png"
Rename-Item "$imgDir/hero/acount4.png" "cloud-accounting-software-nonprofits.png"
Rename-Item "$imgDir/hero/acount5.png" "nonprofit-financial-management-system.png"
Rename-Item "$imgDir/hero/acount6.png" "donation-tracking-software-dashboard.png"
Rename-Item "$imgDir/hero/hero_slider.png" "nonprofit-accounting-software-hero-banner.png"

# BG dir
Rename-Item "$imgDir/bg/aboutus.jpg" "nonprofit-accounting-software-about-us.png" 
Rename-Item "$imgDir/bg/faqer.jpg" "faq-background-nonprofit.png"
Rename-Item "$imgDir/bg/price_bg_1.jpg" "pricing-background.png"
Rename-Item "$imgDir/bg/contact_bg_1.png" "contact-page-background.png"
Rename-Item "$imgDir/bg/feature.png" "feature-background.png"
Rename-Item "$imgDir/bg/home_ills.png" "home-illustration.png"
Rename-Item "$imgDir/bg/loginbg.jpg" "login-background.png"
Rename-Item "$imgDir/bg/loginbg2.jpg" "login-background-2.png"
Rename-Item "$imgDir/bg/loginbg3.jpg" "login-background-3.png"

# Normal dir
Rename-Item "$imgDir/normal/about_13_2.jpg" "ngo-financial-management-system.png"
Rename-Item "$imgDir/normal/about_13_3.jpg" "nonprofit-accounting-dashboard.png"

# Client dir
Rename-Item "$imgDir/client/friars.jpg" "friars-organization-logo.png"
Rename-Item "$imgDir/client/jac.jpg" "jac-organization-logo.png"
Rename-Item "$imgDir/client/Archdiocese.jpg" "archdiocese-logo.png"
Rename-Item "$imgDir/client/chengelpet.jpg" "chengelpet-organization-logo.png"
Rename-Item "$imgDir/client/claretian.jpg" "claretian-organization-logo.png"
Rename-Item "$imgDir/client/congregation-of sister.jpg" "congregation-of-sisters-logo.png"
Rename-Item "$imgDir/client/Salesians_logo.jpg" "salesians-organization-logo.png"
Rename-Item "$imgDir/client/charity.jpg" "charity-organization-logo.png"
Rename-Item "$imgDir/client/annai.jpg" "annai-organization-logo.png"
Rename-Item "$imgDir/client/Montfort.jpg" "montfort-organization-logo.png"
Rename-Item "$imgDir/client/annai-m.jpg" "annai-mobile-logo.png"
Rename-Item "$imgDir/client/congregation-of-sister-bg.jpg" "congregation-background.png"
Rename-Item "$imgDir/client/holy-cross.jpg" "holy-cross-logo.png"
Rename-Item "$imgDir/client/immaculate.jpg" "immaculate-organization-logo.png"
Rename-Item "$imgDir/client/mission-sisters.jpg" "mission-sisters-logo.png"
Rename-Item "$imgDir/client/sav.jpg" "sav-organization-logo.png"
Rename-Item "$imgDir/client/shj.jpg" "shj-organization-logo.png"

# Blog dir
Rename-Item "$imgDir/blog/accounting.jpg" "accounting-software-for-nonprofits-guide.png"
Rename-Item "$imgDir/blog/finance.jpg" "nonprofit-financial-management-tips.png"
Rename-Item "$imgDir/blog/finance01.jpg" "ngo-accounting-software-benefits.png"
Rename-Item "$imgDir/blog/financial.png" "fund-accounting-software-nonprofits.png"

# Icon dir
Rename-Item "$imgDir/icon/service_1_1.svg" "nonprofit-accounting-service-icon.svg"
Rename-Item "$imgDir/icon/service_1_2.svg" "donation-tracking-icon.svg"
Rename-Item "$imgDir/icon/service_1_3.svg" "financial-reporting-icon.svg"
Rename-Item "$imgDir/icon/acc-book.png" "accounting-book-icon.png"
Rename-Item "$imgDir/icon/accounting-software.png" "accounting-software-icon.png"
Rename-Item "$imgDir/icon/activity-report.png" "activity-report-icon.png"
Rename-Item "$imgDir/icon/banking-app.png" "bank-integration-software.png"
Rename-Item "$imgDir/icon/business-plan.png" "business-plan-icon.png"
Rename-Item "$imgDir/icon/calculate.png" "calculation-tool-icon.png"
Rename-Item "$imgDir/icon/calculator.png" "expense-calculator-icon.png"
Rename-Item "$imgDir/icon/chat.png" "chat-support-icon.png"
Rename-Item "$imgDir/icon/estimate.png" "estimate-tool-icon.png"
Rename-Item "$imgDir/icon/networking.png" "networking-icon.png"
Rename-Item "$imgDir/icon/payroll.png" "nonprofit-payroll-management.png"
Rename-Item "$imgDir/icon/stock.png" "stock-management-icon.png"
Rename-Item "$imgDir/icon/terms-and-conditions.png" "terms-conditions-icon.png"
Rename-Item "$imgDir/icon/web-design.png" "web-design-icon.png"
Rename-Item "$imgDir/icon/pricing_card_8_1.svg" "pricing-plan-basic.svg"
Rename-Item "$imgDir/icon/pricing_card_8_2.svg" "pricing-plan-standard.svg"
Rename-Item "$imgDir/icon/pricing_card_8_3.svg" "pricing-plan-premium.svg"

# Other
Rename-Item "$imgDir/icon.png" "acme-icon.png"
Rename-Item "$imgDir/acme_logo.svg" "acme-erp-logo.svg"
Rename-Item "$imgDir/0_Boscsoft.png" "boscsoft-logo.png"
Rename-Item "$imgDir/shape/shape_2.png" "ui-shape-element.png"
Rename-Item "$imgDir/in04.svg" "illustration-element.svg"
Rename-Item "$imgDir/india.svg" "india-map-icon.svg"
Rename-Item "$imgDir/Screenshort/image1.png" "software-screenshot-1.png"
Rename-Item "$imgDir/Screenshort/image2.png" "software-screenshot-2.png"
Rename-Item "$imgDir/Screenshort/image3.png" "software-screenshot-3.png"
Rename-Item "$imgDir/Screenshort/image4.png" "software-screenshot-4.png"

# Testimonials
Rename-Item "$imgDir/testimonial/annai.jpg" "annai-testimonial.png"
Rename-Item "$imgDir/testimonial/charity.jpg" "charity-testimonial.png"
Rename-Item "$imgDir/testimonial/congregation-of-sister.jpg" "congregation-testimonial.png"
Rename-Item "$imgDir/testimonial/Montfort.jpg" "montfort-testimonial.png"
Rename-Item "$imgDir/testimonial/Salesians_logo.jpg" "salesians-testimonial.png"

# Feature
Rename-Item "$imgDir/feature_01.png" "feature-image.png"

Write-Host "All images renamed successfully!"

