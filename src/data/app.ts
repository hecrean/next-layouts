import { Folder } from '@/components/folder-tree';

export const app: Folder = {
  type: `folder`,
  name: `Allergen Aesthetics`,
  slug: `/ALL120`,
  icon: ``,
  tintColor: ``,
  branches: [
    {
      type: `folder`,
      name: `Facial Aesthetics`,
      slug: `/facial-aesthetics`,
      tintColor: `rgb(86, 157, 199)`,
      branches: [
        {
          type: `folder`,
          name: `Facial Skin Anatomy`,
          slug: `/facial-skin-anatomy`,
          tintColor: `rgb(76, 175, 202)`,
          branches: [
            {
              type: `file`,
              name: `Facial Skin Overview`,
              slug: `/facial-skin-overview`,
            },
            {
              type: `file`,
              name: `Structural Anatomy of Skin and Components`,
              slug: `/structural-anatomy-of-skin-and-components`,
            },
            {
              type: `file`,
              name: `Skin Changes With Age`,
              slug: `/skin-changes-with-age`,
            },
            {
              type: `file`,
              name: `Instrinsic vs Extrinsic Aging`,
              slug: `/instrinsic-vs-extrinsic-aging`,
            },
            {
              type: `file`,
              name: `Extracellular Matrix Proteins`,
              slug: `/extracellular-matrix-proteins`,
            },
            {
              type: `file`,
              name: `Racial Diversity on Skin Aging`,
              slug: `/racial-diversity-on-skin-aging`,
            },
            {
              type: `file`,
              name: `Skin Quality Attributes and Tools for Assesment in Clinical Studies`,
              slug: `/skin-quality-attributes-and-tools-for-assessment-in-clinical-studies`,
            },
          ],
        },
        {
          type: `folder`,
          name: `OnabotulinomtoxinA`,
          slug: `/botox`,
          tintColor: `rgb(98, 159, 211)`,
          branches: [
            {
              type: `folder`,
              name: `History of Botulinum Toxin A products`,
              slug: `/history-of-botulinum-toxin-a-products`,
              branches: [
                { type: `file`, name: `Timeline`, slug: `/timeline` },
                {
                  type: `file`,
                  name: `FDA and EU approvals`,
                  slug: `/fda-and-eu-approvals`,
                },
              ],
            },
            {
              type: `folder`,
              name: `OnabotulinumtoxinA MoA`,
              slug: `/onabotulinumtoxinA-MoA`,
              branches: [
                { type: `file`, name: `Structure`, slug: `/structure` },
                {
                  type: `file`,
                  name: `Mechanisms of Actions`,
                  slug: `/mechanisms-of-action`,
                },
              ],
            },
            {
              type: `folder`,
              name: `OnabotulinumtoxinA products: Potency, Units and Non-Interchangeability`,
              slug: `/onabotulinumtoxinA-products`,
              branches: [
                { type: `file`, name: `Manufacturing`, slug: `/manufacturing` },
                {
                  type: `file`,
                  name: `Potency Assays`,
                  slug: `/potency-assays`,
                },
                {
                  type: `file`,
                  name: `Non-Interchangeability`,
                  slug: `/non-interachangeability`,
                },
              ],
            },
          ],
        },
        {
          type: `folder`,
          name: `Lower face`,
          slug: `/lower-face`,
          tintColor: `rgb(114, 194, 227)`,
          branches: [
            {
              type: `folder`,
              name: `Anatomy`,
              slug: `/anatomy`,
              branches: [
                {
                  type: `folder`,
                  name: `Mouth`,
                  slug: `/mouth`,
                  branches: [
                    {
                      type: `file`,
                      name: `Anatomical landmarks of the lip`,
                      slug: `/anatomical-landmarks-of-the-lip`,
                    },
                    {
                      type: `file`,
                      name: `Anatomical considerations in lip contouring`,
                      slug: `/anatomical-considerations`,
                    },
                    {
                      type: `file`,
                      name: `Changes in the lip over time`,
                      slug: `/lip-changes-over-time`,
                    },
                    {
                      type: `file`,
                      name: `Characteristics of the ideal lip`,
                      slug: `/ideal-lip`,
                    },
                    {
                      type: `file`,
                      name: `Labial Artery`,
                      slug: `/labial-artery`,
                    },
                  ],
                },
                {
                  type: `folder`,
                  name: `Chin`,
                  slug: `/chin`,
                  branches: [
                    { type: `file`, name: `Overview`, slug: `/overview` },
                    {
                      type: `file`,
                      name: `Chin aesthetics in Women and Men`,
                      slug: `/chin-aesthetics`,
                    },
                    {
                      type: `file`,
                      name: `Perceptions of attractiveness for men and women`,
                      slug: `/perceptions-of-attractiveness`,
                    },
                    {
                      type: `file`,
                      name: `Anatomic changes in aging lower face`,
                      slug: `/anatomic-chages`,
                    },
                    {
                      type: `file`,
                      name: `Chin retrusion`,
                      slug: `/chin-retrusion`,
                    },
                  ],
                },
              ],
            },
            {
              type: `folder`,
              name: `Treatment Options`,
              slug: `/treatment-options`,
              branches: [
                {
                  type: `file`,
                  name: `file-name`,
                  slug: `/file-slug`,
                },
              ],
            },
            {
              type: `folder`,
              name: `Kybella`,
              slug: `/kybella`,
              branches: [
                { type: `file`, name: `General Info`, slug: `/general-info` },
                {
                  type: `file`,
                  name: `Characteristics and Biologic Role of Deoxycholic Acid`,
                  slug: `/deoxycholic-acid-characteristics`,
                },
                {
                  type: `file`,
                  name: `Historic and Present Pharmaceutical Uses of Deoxycholic Acid`,
                  slug: `/deoxycholic-acid-pharmaceutical-uses`,
                },
                {
                  type: `file`,
                  name: `Mechanism of Action of Exogenous Kybella Injection in Subcutaneous Tissue`,
                  slug: `/mechanisms-of-action`,
                },
                { type: `file`, name: `ISI`, slug: `/isi` },
              ],
            },
            {
              type: `folder`,
              name: `Voluma`,
              slug: `/voluma`,
              branches: [
                {
                  type: `folder`,
                  name: `General Info`,
                  slug: `/general-info`,
                  branches: [
                    { type: `file`, name: `Disclosures`, slug: `/disclosures` },
                    { type: `file`, name: `Indications`, slug: `/indications` },
                    {
                      type: `file`,
                      name: `Contraindications`,
                      slug: `/contraindications`,
                    },
                  ],
                },
                {
                  type: `folder`,
                  name: `Vycross Technology`,
                  slug: `/vycross-technology`,
                  branches: [
                    { type: `file`, name: `Description`, slug: `/description` },
                    {
                      type: `file`,
                      name: `Specifications`,
                      slug: `/specifications`,
                    },
                  ],
                },
                {
                  type: `folder`,
                  name: `Voluma Clinical Study`,
                  slug: `/voluma-clinical-study`,
                  branches: [
                    {
                      type: `file`,
                      name: `Study Design`,
                      slug: `/study-design`,
                    },
                    {
                      type: `file`,
                      name: `Effectiveness`,
                      slug: `/effectiveness`,
                    },
                    { type: `file`, name: `Safety`, slug: `/safety` },
                  ],
                },
              ],
            },
            {
              type: `folder`,
              name: `Volux`,
              slug: `/volux`,
              branches: [
                {
                  type: `folder`,
                  name: `General Info`,
                  slug: `/general-info`,
                  branches: [
                    { type: `file`, name: `Disclosures`, slug: `/disclosures` },
                    { type: `file`, name: `Indications`, slug: `/indications` },
                    {
                      type: `file`,
                      name: `Contraindications`,
                      slug: `/contraindications`,
                    },
                  ],
                },
                {
                  type: `folder`,
                  name: `Volux Clinical Studies`,
                  slug: `/volux-clinical-studies`,
                  branches: [
                    {
                      type: `folder`,
                      name: `Safe, Effective Chin and Jaw Restoration With VYC-25L Hyaluronic Acid Injectable Gel`,
                      slug: `/vyc-25l`,
                      branches: [
                        {
                          type: `file`,
                          name: `Study Design`,
                          slug: `/study-design`,
                        },
                        {
                          type: `file`,
                          name: `Effectiveness`,
                          slug: `/effectiveness`,
                        },
                        {
                          type: `file`,
                          name: `Safety`,
                          slug: `/safety`,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: `folder`,
                  name: `Volift with Lidocaine`,
                  slug: `/volift-with-lidocaine`,
                  branches: [
                    {
                      type: `folder`,
                      name: `General Info`,
                      slug: `/general-info`,
                      branches: [
                        {
                          type: `file`,
                          name: `Disclosures`,
                          slug: `/disclosures`,
                        },
                        {
                          type: `file`,
                          name: `Indications`,
                          slug: `/indications`,
                        },
                        {
                          type: `file`,
                          name: `Contraindications`,
                          slug: `/contraindications`,
                        },
                        {
                          type: `file`,
                          name: `Methods of Use`,
                          slug: `/methods-of-use`,
                        },
                        { type: `file`, name: `Warnings`, slug: `/warnings` },
                      ],
                    },
                    {
                      type: `folder`,
                      name: `Injection Technique`,
                      slug: `/injection-technique`,
                      branches: [
                        {
                          type: `file`,
                          name: `Treatment Sequence and Technique`,
                          slug: `/treatment-sequence-and-technique`,
                        },
                        {
                          type: `file`,
                          name: `Aseptic Technique`,
                          slug: `/aseptic-technique`,
                        },
                      ],
                    },
                    {
                      type: `folder`,
                      name: `Vollift with Lidocaine Clinical Study`,
                      slug: `/vollift-with-lidocaine-clinical-study`,
                      branches: [
                        {
                          type: `file`,
                          name: `Study Design`,
                          slug: `/study-design`,
                        },
                        {
                          type: `file`,
                          name: `Effectiveness`,
                          slug: `/effectiveness`,
                        },
                        {
                          type: `file`,
                          name: `Safety`,
                          slug: `/safety`,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: `folder`,
              name: `Volbella`,
              slug: `/volbella`,
              branches: [
                {
                  type: `folder`,
                  name: `General Info`,
                  slug: `/general-info`,
                  branches: [
                    { type: `file`, name: `Disclosures`, slug: `/disclosures` },
                    {
                      type: `file`,
                      name: `Descriptions`,
                      slug: `/descriptions`,
                    },
                    { type: `file`, name: `Indications`, slug: `/indications` },
                    {
                      type: `file`,
                      name: `Contraindications`,
                      slug: `/contraindications`,
                    },
                    {
                      type: `file`,
                      name: `Precaution For Use`,
                      slug: `/precaution-for-use`,
                    },
                    {
                      type: `file`,
                      name: `Methodology of Use - Posology`,
                      slug: `/methodology-of-use`,
                    },
                  ],
                },
                {
                  type: `folder`,
                  name: `Injection Technique`,
                  slug: `/injection-technique`,
                  branches: [
                    {
                      type: `file`,
                      name: `Treatment Sequence and Technique`,
                      slug: `/treatment-sequence-and-technique`,
                    },
                    {
                      type: `file`,
                      name: `Aseptic Technique`,
                      slug: `/aseptic-technique`,
                    },
                  ],
                },
                {
                  type: `folder`,
                  name: `Volbella with Lidocaine Clinical Studies`,
                  slug: `/volbella-with-lidocaine-clinical-studies`,
                  branches: [
                    {
                      type: `folder`,
                      name: `Juvéderm Volbella in the perioral area: a 12-month prospective, multicenter, open-label study`,
                      slug: `/juvéderm-volbella`,
                      branches: [
                        {
                          type: `file`,
                          name: `Study Design`,
                          slug: `/study-design`,
                        },
                        {
                          type: `file`,
                          name: `Effectiveness`,
                          slug: `/effectiveness`,
                        },
                        {
                          type: `file`,
                          name: `Safety`,
                          slug: `/safety`,
                        },
                      ],
                    },
                    {
                      type: `folder`,
                      name: `Lip and perioral enhancement: A 12-month prospective, randomized, controlled study`,
                      slug: `/lip-and-perioral-enhancement`,
                      branches: [
                        {
                          type: `file`,
                          name: `Study Design`,
                          slug: `/study-design`,
                        },
                        {
                          type: `file`,
                          name: `Effectiveness`,
                          slug: `/effectiveness`,
                        },
                        {
                          type: `file`,
                          name: `Safety`,
                          slug: `/safety`,
                        },
                      ],
                    },
                    {
                      type: `folder`,
                      name: `Safety and effectiveness of VYC-15L, a hyaluronic acid filler for lip and perioral enhancement: One-year results from a randomized, controlled study`,
                      slug: `/vyc-15l-randomized-controlled-study`,
                      branches: [
                        {
                          type: `file`,
                          name: `Study Design`,
                          slug: `/study-design`,
                        },
                        {
                          type: `file`,
                          name: `Effectiveness`,
                          slug: `/effectiveness`,
                        },
                        {
                          type: `file`,
                          name: `Safety`,
                          slug: `/safety`,
                        },
                      ],
                    },
                    {
                      type: `folder`,
                      name: `Safety and effectiveness of repeat treatment with VYC-15L for lip and perioral enhancement: Results from a prospective multicenter study`,
                      slug: `/vyc-15l-prospective-multicentre-study`,
                      branches: [
                        {
                          type: `file`,
                          name: `Study Design`,
                          slug: `/study-design`,
                        },
                        {
                          type: `file`,
                          name: `Effectiveness`,
                          slug: `/effectiveness`,
                        },
                        {
                          type: `file`,
                          name: `Safety`,
                          slug: `/safety`,
                        },
                      ],
                    },
                    {
                      type: `folder`,
                      name: `A prospective, open-label, multicenter, observational, postmarket study of the use of a 15 mg/mL hyaluronic acid dermal filler in the lips`,
                      slug: `/dermal-filler-in-lips`,
                      branches: [
                        {
                          type: `file`,
                          name: `Study Design`,
                          slug: `/study-design`,
                        },
                        {
                          type: `file`,
                          name: `Effectiveness`,
                          slug: `/effectiveness`,
                        },
                        {
                          type: `file`,
                          name: `Safety`,
                          slug: `/safety`,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: `folder`,
              name: `Ultra XC`,
              slug: `/ultra-xc`,
              branches: [
                {
                  type: `folder`,
                  name: `General Info`,
                  slug: `/general-info`,
                  branches: [
                    {
                      type: `file`,
                      name: `Disclosures`,
                      slug: `/disclosures`,
                    },
                    {
                      type: `file`,
                      name: `Descriptions`,
                      slug: `/descriptions`,
                    },
                    {
                      type: `file`,
                      name: `Indications`,
                      slug: `/indications`,
                    },
                    {
                      type: `file`,
                      name: `Contraindications`,
                      slug: `/contraindications`,
                    },
                    { type: `file`, name: `Warnings`, slug: `/warnings` },
                    { type: `file`, name: `Precautions`, slug: `/precautions` },
                  ],
                },
                {
                  type: `folder`,
                  name: `Ultra XC clinical trial`,
                  slug: `/ultra-xc-clinical-trial`,
                  branches: [
                    {
                      type: `file`,
                      name: `Study Design`,
                      slug: `/study-design`,
                    },
                    {
                      type: `file`,
                      name: `Effectiveness`,
                      slug: `/effectiveness`,
                    },
                    {
                      type: `file`,
                      name: `Safety`,
                      slug: `/safety`,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: `folder`,
      name: `Body Contouring`,
      slug: `/body-contouring`,
      icon: ``,
      tintColor: `rgb(140, 94, 190)`,
      branches: [
        {
          type: `folder`,
          name: `Cool Sculpting`,
          slug: `/cool-sculpting`,
          tintColor: `rgb(92, 41, 148)`,
          branches: [
            {
              type: `folder`,
              name: `Cryolipolysis effects on nerves, lipids, livier function and adipose tissue`,
              slug: `/cryolipolysis-effects`,
              branches: [
                {
                  type: `file`,
                  name: `Mechanisms of Action`,
                  slug: `/mechanisms-of-actions`,
                },
                {
                  type: `folder`,
                  name: `Selected Preclinical/Clinical Studies`,
                  slug: `/studies`,
                  branches: [
                    {
                      type: `file`,
                      name: `Cryolipolysis for Non-Invasive Fat Cell Destruction: Initial results from a Pig model`,
                      slug: `/initial-results-from-a-pig-model`,
                    },
                    {
                      type: `file`,
                      name: `Selective Cryolysis: A novel Method of Non-Invasive Fat Removal`,
                      slug: `/novel-method-of-noninvasive-fat-removal`,
                    },
                    {
                      type: `file`,
                      name: `Assessment of Subcutaneous Fat Injury, Depth of Injury, and Temperature Threshold After Cryolipolysis`,
                      slug: `/assessment-after-cryolipolysis`,
                    },
                    {
                      type: `file`,
                      name: `Adipose Tissue Response`,
                      slug: `/adipose-tissue-response`,
                    },
                    {
                      type: `file`,
                      name: `Clinical efficacy of Cryolipolysis and Effects on Peripheral nerves`,
                      slug: `/clinical-efficacy`,
                    },
                    {
                      type: `file`,
                      name: `Lipids and Liver function`,
                      slug: `/lipids-and-liver-function`,
                    },
                  ],
                },
              ],
            },
            {
              type: `folder`,
              name: `Global expert opinion on cryolipolysis treatment and considerations`,
              slug: `/global-expert-opinion`,
              branches: [
                { type: `file`, name: `Overview`, slug: `/overview` },
                { type: `file`, name: `Background`, slug: `/background` },
                {
                  type: `file`,
                  name: `Objective and Methods`,
                  slug: `/objective-and-methods`,
                },
                {
                  type: `folder`,
                  name: `Results`,
                  slug: `/results`,
                  branches: [
                    {
                      type: `file`,
                      name: `Defining Outcomes`,
                      slug: `/defining-outcomes`,
                    },
                    {
                      type: `file`,
                      name: `Patient Evaluations and Selection`,
                      slug: `/patient-evaluations`,
                    },
                    {
                      type: `file`,
                      name: `Treatment Protocols by Body Region`,
                      slug: `/treatment-protocols`,
                    },
                    {
                      type: `file`,
                      name: `Management of Patient Satisfactions`,
                      slug: `/patient-satisfaction`,
                    },
                    {
                      type: `file`,
                      name: `Adverse Event Management`,
                      slug: `/event-management`,
                    },
                    {
                      type: `file`,
                      name: `Selection of Cryolipolysis Modality`,
                      slug: `/selection-of-cryolipolysis-modality`,
                    },
                  ],
                },
              ],
            },
            {
              type: `folder`,
              name: `Clinical Studies`,
              slug: `/clinical-studies`,
              branches: [
                {
                  type: `folder`,
                  name: `Real World Experience`,
                  slug: `/real-world-experience`,
                  branches: [
                    {
                      type: `file`,
                      name: `Manual Massage`,
                      slug: `/manual-massage`,
                    },
                    {
                      type: `file`,
                      name: `Patient Satisfaction`,
                      slug: `/patient-satisfaction`,
                    },
                    {
                      type: `file`,
                      name: `Real World Experience`,
                      slug: `/real-world-experience`,
                    },
                    {
                      type: `file`,
                      name: `Multiple Cycles of Coolsculpting`,
                      slug: `/multiple-cycle-of-coolsculpting`,
                    },
                  ],
                },
                {
                  type: `folder`,
                  name: `Specific Patient Populations`,
                  slug: `/specific-patient-populations`,
                  branches: [
                    {
                      type: `file`,
                      name: `Chinese Patients`,
                      slug: `/chinese-patients`,
                    },
                    {
                      type: `file`,
                      name: `Korean Patients`,
                      slug: `/korean-patients`,
                    },
                    {
                      type: `file`,
                      name: `Hispanic Patients`,
                      slug: `/hispanic-patients`,
                    },
                    {
                      type: `file`,
                      name: `Asian Patients`,
                      slug: `/asian-patients`,
                    },
                  ],
                },
                {
                  type: `folder`,
                  name: `Body Area and Applicator`,
                  slug: `/body-area-and-applicatior`,
                  branches: [
                    {
                      type: `file`,
                      name: `Submental - Coolmini`,
                      slug: `/submental`,
                    },
                    { type: `file`, name: `Arm - Coolcup`, slug: `/arm` },
                    {
                      type: `file`,
                      name: `Flank - Coolcup and Cooladvantage`,
                      slug: `/flank`,
                    },
                    {
                      type: `file`,
                      name: `Abdomen - CoolsmithProp and Cooladvantage`,
                      slug: `/abdomen`,
                    },
                    {
                      type: `file`,
                      name: `Inner Thigh - Coolfit`,
                      slug: `/inner-thigh`,
                    },
                    {
                      type: `file`,
                      name: `Lateral Thigh - coolsmooth`,
                      slug: `/lateral-thigh`,
                    },
                  ],
                },
              ],
            },
            {
              type: `folder`,
              name: `IFU, ISI, AE`,
              slug: `/ifu-isi-ae`,
              branches: [{ type: `file`, name: `name-file`, slug: `/slug` }],
            },
          ],
        },
      ],
    },
  ],
};
