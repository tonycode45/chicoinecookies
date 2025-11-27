import { Container } from "@/components/layout/container"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-serif mb-8 text-center">Frequently Asked Questions</h1>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long do the cookies stay fresh?</AccordionTrigger>
              <AccordionContent>
                Our cookies are baked fresh daily and contain no preservatives. They stay fresh for up to 5 days at room temperature if kept in an airtight container, or up to 2 weeks in the fridge. You can also freeze them for up to 3 months!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you offer gluten-free or vegan options?</AccordionTrigger>
              <AccordionContent>
                Yes! We have a dedicated selection of gluten-free and vegan cookies. However, please note that we bake in a shared kitchen, so we cannot guarantee 100% allergen-free products for those with severe allergies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How does shipping work?</AccordionTrigger>
              <AccordionContent>
                We ship nationwide! Orders placed by 12pm EST are baked and shipped the same day. We use 2-day priority shipping to ensure freshness.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I customize a box?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Use our "Build Your Own Box" feature to mix and match your favorite flavors in a 6-pack or 12-pack.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you do corporate orders?</AccordionTrigger>
              <AccordionContent>
                Yes, we love corporate gifting! Visit our Corporate page to request a quote for bulk orders, custom packaging, and event catering.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </div>
  )
}

