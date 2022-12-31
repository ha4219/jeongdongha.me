"use strict";(self.webpackChunkha4219_github_io=self.webpackChunkha4219_github_io||[]).push([[538],{4012:function(e,t,n){n.r(t),n.d(t,{PostTemplate:function(){return c},default:function(){return m}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",p:"p",strong:"strong",img:"img",ol:"ol"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Feature Pyramid Networks for Object Detection"),"\n",l.createElement(t.h2,null,"Abstract"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"Feature pyramids are a basic component in recognition\nsystems for detecting objects at different scales. But recent\ndeep learning object detectors have avoided pyramid representations, in part because they are compute and memory\nintensive. In this paper, we exploit the inherent multi-scale,\npyramidal hierarchy of deep convolutional networks to construct feature pyramids with marginal extra cost. A topdown architecture with lateral connections is developed for\nbuilding high-level semantic feature maps at all scales. This\narchitecture, called a Feature Pyramid Network (FPN),\nshows significant improvement as a generic feature extractor in several applications. Using FPN in a basic Faster\nR-CNN system, our method achieves state-of-the-art singlemodel results on the COCO detection benchmark without\nbells and whistles, surpassing all existing single-model entries including those from the COCO 2016 challenge winners. In addition, our method can run at 6 FPS on a GPU\nand thus is a practical and accurate solution to multi-scale\nobject detection. Code will be made publicly available.\n")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"FPN은 여러가지 scale을 가진 객체탐지에 기본적인 component이다. 하지만 최근 다른 연구에서는 복잡하고 메모리 집중적이기 때문에 pyramid representations 피한다. 본 논문에서, 한계 추가 비용으로 feature pyramid를 구성하기 위해 고유의 multi-scale, 즉 pyramidal hierarchy of deep convolutional networks(convolutional network의 피라미드 계층)을 활용한다. All scale에 high-level feature maps에 대한 top-down 구조는 개발됐다.  FPN은  몇가지 application의 generic feature extractor에 중요한 성장을 보여준다. FPN을 사용한 Faster-RCNN은 without bells and whistles, COCO detection benchmark에서 최첨단? 단일 모델 결과를 달성하여 COCO 2016 challenge 우승자를 포함한 모든 기존 단일 모델 항목을 능가한다. 추가로 우리 모델은 GPU 환경에서 6 FPS를 갖는다. 따라서 multi-scale 객체탐지에 실용적이고 정확한 해결책이다. code는 곧 공식적으로 이용 가능하다."),"\n"),"\n",l.createElement(t.h2,null,"1. Introduction"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"}," Recognizing objects at vastly different scales is a fundamental challenge in computer vision. Feature pyramids built upon image pyramids (for short we call these featurized image pyramids) form the basis of a standard solution [1] (Fig. 1(a)). These pyramids are scale-invariant in the sense that an object’s scale change is offset by shifting its\nlevel in the pyramid. Intuitively, this property enables a model to detect objects across a large range of scales by scanning the model over both positions and pyramid levels.\n Featurized image pyramids were heavily used in the era of hand-engineered features [5, 25]. They were so critical that object detectors like DPM [7] required dense scale sampling to achieve good results (e.g., 10 scales per octave). For recognition tasks, engineered features have largely been replaced with features computed by deep convolutional networks (ConvNets) [19, 20]. Aside from being capable of representing higher-level semantics, ConvNets are also more robust to variance in scale and thus facilitate recognition from features computed on a single input scale [15, 11, 29] (Fig. 1(b)). But even with this robustness, pyramids are still needed to get the most accurate results. All recent top entries in the ImageNet [33] and COCO [21] detection challenges use multi-scale testing on featurized image pyramids (e.g., [16, 35]). The principle advantage of featurizing each level of an image pyramid is that it produces a multi-scale feature representation in which all levels are semantically strong, including the high-resolution levels.\n Nevertheless, featurizing each level of an image pyramid has obvious limitations. Inference time increases considerably (e.g., by four times [11]), making this approach\nimpractical for real applications. Moreover, training deep \n")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"매우 다른 sacles에 객체를 인식하는 것은 CV에 기초적인 과제이다. image pyramids에서 형성된 Feature pyramids는 기본적인 해결책의 근간을 형성한다.  pyramids는 물체의 스케일 변화가 다음 값을 이동함으로써 상쇄된다는 점에서 scale-불변이다. 직관적으로, this property를 사용하면 모델이 위치 및 피라미드 레벨 모두에서 모델을 스캔하여 광범위한 축척에 걸쳐 객체를 탐지할 수 있습니다."),"\n",l.createElement(t.li,null,"Featurized image pyramids는 hand-engineered features에서 많이 사용된다. DPM과 같은 object detectors가 좋은 결과를 내기 위해 dense scale sampling이 필요한 것은 치명적이다. 인식 과제에서, engineered된 feature들은 deep ConvNets으로 계산된 features으로 바뀌었다. 더 높은 semantics를 나타낼 뿐만 아니라, ConvNets scale 변화에 강력하다. 따라서 single input scale에서 계산된 features로 인식을 용이하게 한다. 강건하지만 pyramids는 여전히 가장 좋은 정확도 결과를 필요로 한다. 최근 유명 대회에 참가하는 모델들은 featurized image pyramids에 multi-scale testing을 사용한다. 각 level에 image pyramid를 featurizing의  주요 이점은 고해상도를 포함한 모든 level에서 semantically strong한 multi-scale feature 를 제공한다."),"\n",l.createElement(t.li,null,"그럼에도 불구하고 명백한 한계가 존재한다. 시간이 상당히 증가하고 실제 app에서 비실용적일 것이라고 예측된다. 게다가 end-to-end networks에 올리는 것은 메모리적으로 실현 불가능하고 image pyramid는 오직 test time에 사용되기에 train과 test-time 추론 사이에 모순이 발생한다. 이러한 이유로 Fast, Faster R-CNN은 featurized image pyramids를 기본 세팅에 사용하지 않기로 선택했다."),"\n",l.createElement(t.li,null,"하지만 image pyrmaid는 오직 multi-scale feature representation을 계산하는 것만 있는게 아니다. deep ConvNet은 각 layer마다 feature hierarchy를 계산하고 feature 계층을 subsampling은 고유한 multi-scale과 pyramidal shape를 갖고 있다. 이러한 feature hierarchy는 각기 다른 해상도의 feature map을 제공하지만 깊이에 따라 야기되는 큰 semantic gaps을 보여준다. 높은 해상도 maps은 인식 능력에 안좋은 낮은 feature를 갖고있다."),"\n",l.createElement(t.li,null,"SSD는 ConvNet의 마치 featurized image pyramid처럼 pyramidal feature hierarchy를 처음 사용한 시도 중 하나이다. 이상적으로 SSD-style pyramid는 다른 여러 이전에 통과된 layer로 부터 multi-scale feature maps을 재사용해서 cost가 적다. 그러나 low-level feature을 사용하지 않으려면 SSD는 이미 계산된 hierarchy를 다시 사용하고 대신 새로운 layer를 추가하면서 network의 상위 계층으로부터 pyramid를 구축한다. 따라서 고해상도 계층맵을 사용할 기회를 잃는다. 고해상도 맵은 작은 객체를 탐지할 때 중요하다."),"\n",l.createElement(t.li,null,"이 논문의 목표는 모든 scale에 강력한 ConvNet's feature hierarchy를 만들어서 pyramid shape에 영향을 주는 것이다. 목표를 달성하려면 낮은 해상도와 높은 해상도의 semantically 한 강한 features 그리고 top-down pathway와 lateral connections을 통과하고 semantically하고 약한 features들 구조에 달려있다."),"\n"),"\n",l.createElement(t.h2,null,l.createElement(t.a,{href:"https://youtu.be/r3U9MJslg5g"},"Ref")),"\n",l.createElement(t.p,null,"정말 많이 보고 배워서 참고합니다. 또한 영상 내용을 시간을 바탕으로 제가 새로 재구성했습니다."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"background"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Resolution && level feature"),"\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932669533649535026/unknown.png",alt:"img"}),"\n초반 layer에서는 높은 해상도를 갖고 있지만 각 pixel하나는 큰 의미가 없을 수 있다. (매우 작은 object면 있을 수도 있음. 하지만 대부분 object들은 거의 pixel 하나에만 들어있지 않고 across하기 때문에 그럴리는 적다.) FC를 제외하고 뒤로가면 갈수록 해상도는 낮아지지만 depth가 깊어지고 각 pixel에 담는 정보는 매우 의미있음을 알 수 있다.\n여기서 pixel은 x.shape = (512,  w, h)로 봤을때 x[:, p_x, p_y] 값을 의미한다. 또한 FC를 제외하고 생각하자."),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Scale"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Small Scale => 나무"),"\n",l.createElement(t.li,null,"Large Scale => 숲\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932661190805561415/unknown.png",alt:"img"})),"\n",l.createElement(t.li,null,"비교\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932662734804357160/unknown.png",alt:"img"}),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"그러면 객체를 인식하기 위해서는 Large Scale을 만드는 것이 좋을 것이다. 그러기 위한 방법으로는 2가지가 있다.","\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Window Size를 늘린다. (맨 오른쪽 그림)"),"\n",l.createElement(t.li,null,"Image Size를 줄인다. (3번째 그림)"),"\n"),"\n"),"\n",l.createElement(t.li,null,"그림에서는 window 크기를 늘린 것과 image 크기를 줄이는게 차이가 있어보이지만 사실은 차이가 없다. 의미만 부여하기 위해 만들었다."),"\n"),"\n"),"\n"),"\n"),"\n"),"\n"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Paper list"),"\n",l.createElement(t.img,{src:"https://github.com/hoya012/deep_learning_object_detection/raw/master/assets/deep_learning_object_detection_history.PNG",alt:"img"})),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Object Detection Milestones"),"\n",l.createElement(t.img,{src:"https://user-images.githubusercontent.com/31475037/75324222-d2612f80-58b9-11ea-8ae5-e1ad0e1ccfd5.png",alt:"img"})),"\n",l.createElement(t.li,null,"이전에 object detection에는 one-stage detector와 two-stage dectector가 있다고 소개했습니다.","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"1-Stage Detector"),"는 Region Proposal -> Classification이 순서대로 실행"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"2-Stage Detector"),"는 Region Proposal, Classification이 동시에 실행"),"\n"),"\n"),"\n"),"\n",l.createElement(t.h2,null,"FPN"),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"https://production-media.paperswithcode.com/methods/new_teaser_TMZlD2J.jpg",alt:"FPN Explained | Papers With Code"}),"\n이 그림은 FPN을 검색하면 나오는 대표적인 그림이다. 이를 바탕으로 설명한다."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Featurized image pyramid"),"\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932665573559640134/unknown.png",alt:"img"}),"\n위 background에서 설명했던 내용처럼 Large Scale을 맞추기 위해서는 방법이 두 가지가 있다. 하나는 Window box를 늘리거나 또 하나는 Image size를 조정하는 것이다. ",l.createElement(t.strong,null,"Featurized image pyramid"),"는 후자이다. 따라서 Image size를 변경해서 예측한다. 하지만 이는 자원소모가 크고 빠른 속도를 기대할 수 없다. 따라서 다른 방식이 나오기 시작한다. 해당 방법을 쓴 model은 ",l.createElement(t.strong,null,"Overfeat, HOG, SIFT")," 등이 있다.\n",l.createElement(t.img,{src:"https://blog.kakaocdn.net/dn/mr4Lo/btqPe13oMhP/pK4EWkPsTbHELwJGcdMIT0/img.jpg",alt:"img"})),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Single feature map"),"\n하나의 image를 넣어서 사용하는 방법이다.  속도 측면에서는 좋지만 이전 방법보다는 정확도가 떨어진다는 단점이 있다. 가장 대표적으로 ",l.createElement(t.strong,null,"Yolov1"),"이 있다.\n",l.createElement(t.img,{src:"https://curt-park.github.io/images/yolo/Figure3.JPG",alt:"img"})),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Pyramidal feature hierarchy"),"\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932670820235509810/unknown.png",alt:"img"}),'\n"그러면 Large Scale을 적용하는 방법으로 Image 크기를 줄이는 법이 있는데 VGG같은 경우 일정 비율로 pooling 되니까 이를 stage마다 적용하는 방법이 있지 않을까?" 에서 시작했다고 생각한다. 가장 대표적인 모델은 ',l.createElement(t.strong,null,"SSD"),"가 있다.\n",l.createElement(t.img,{src:"https://d3i71xaburhd42.cloudfront.net/4e27fec1703408d524d6b7ed805cdb6cba6ca132/19-Figure3.1-1.png",alt:"SSD-Sface : Single shot multibox detector for small faces | Semantic Scholar"}),"\n근데 아까 ",l.createElement(t.strong,null,"High Resolution이면 low feature"),"를 갖는다고 했고 ",l.createElement(t.strong,null,"Low Resolution이면 high feature"),"를 갖는다고 했다.  forward 도중 predict를 진행하기에 cost 측면에서는 좋다. 하지만 높은 해상도에서는 좋은 feature들을 얻을 수 없다. 그렇기에 높은 해상도에서 관측 가능한 작은 객체들을 탐지하기 어려울 것이다.\n그래서 여기서 하나 단어를 잡고 가면 ",l.createElement(t.strong,null,"Semantic")," Gap이다.\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932675643722838077/unknown.png",alt:"img"})),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Feature Pyramid Network"),"\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932676070908502046/unknown.png",alt:"img"}),"\n그래서 나온게 FPN이다.  그러면 봐야하는 특징이 세 가지 있다.(Yolov3 모델로 설명할 것이다. 사실 완벽한 FPN은 아닌 것 같다.)","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"bottom-up pathway\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932682821896667236/unknown.png",alt:"img"}),"\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932682880541392977/unknown.png",alt:"img"}),"\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932678088419061810/unknown.png",alt:"img"}),"\n해당 부분은 downsampling 과정이고 해상도를 낮추면서 feature level을 높이는 단계이다. FNP 논문에서는 ResNet을 기준으로 설명했다."),"\n",l.createElement(t.li,null,"top-down pathway\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932678088419061810/unknown.png",alt:"img"}),"\n해당 부분은 upsampling 과정이다. 해상도를 높이는데 feature를 갖고 간다. 방법은 nn.Upsampling 공식 문서를 확인해도 되지만 간략히 설명하면 neareast는 아래와 같은 방식으로 동작한다.\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932680429964787712/unknown.png",alt:"img"})),"\n",l.createElement(t.li,null,"lateral connections\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932683196317970502/unknown.png",alt:"img"}),"\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932678851274879056/unknown.png",alt:"img"}),"\n여기 부분이 yolov3와 다르다. FNP는 +를 한다. 하지만 yolov3는 depth기준 concat을 수행한다.\n",l.createElement(t.img,{src:"https://cdn.discordapp.com/attachments/904717831940239403/932681564372992052/unknown.png",alt:"img"}),"\n해당 부분이 어떤 의미가 있는지는 좀 더 찾아보겠다.\n본 논문에서는 아래와 같은 + 연산으로 1x1 conv에서 output 값을 맞춰준다. 따라서 같은 shape로 + 연산이 이루어진다.\n",l.createElement(t.img,{src:"https://blog.kakaocdn.net/dn/0ela2/btqUsdFXuAe/zSFO8k1p1JIbMoz5vWi75k/img.png",alt:"img"})),"\n"),"\n"),"\n"),"\n",l.createElement(t.h2,null,"Region Proposal Network(RPN)"),"\n",l.createElement(t.p,null,"해당 내용은 ",l.createElement(t.strong,null,"Faster-RCNN"),"에서 나온 내용이다. ",l.createElement(t.strong,null,"Yolov2"),"에서 anchor는 위 논문을 보고 따왔다."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"3.1 Region Proposal Networks\nA Region Proposal Network (RPN) takes an image\n(of any size) as input and outputs a set of rectangular\nobject proposals, each with an objectness score.3 We\nmodel this process with a fully convolutional network\n[7], which we describe in this section. Because our ultimate goal is to share computation with a Fast R-CNN\nobject detection network [2], we assume that both nets\nshare a common set of convolutional layers. In our experiments, we investigate the Zeiler and Fergus model\n[32] (ZF), which has 5 shareable convolutional layers\nand the Simonyan and Zisserman model [3] (VGG-16),\nwhich has 13 shareable convolutional layers.\nTo generate region proposals, we slide a small\nnetwork over the convolutional feature map output\nby the last shared convolutional layer. This small\nnetwork takes as input an n × n spatial window of\nthe input convolutional feature map. Each sliding\nwindow is mapped to a lower-dimensional feature\n(256-d for ZF and 512-d for VGG, with ReLU [33]\nfollowing). This feature is fed into two sibling fullyconnected layers—a box-regression layer (reg) and a\nbox-classification layer (cls). We use n = 3 in this\npaper, noting that the effective receptive field on the\ninput image is large (171 and 228 pixels for ZF and\nVGG, respectively). This mini-network is illustrated\nat a single position in Figure 3 (left). Note that because the mini-network operates in a sliding-window\nfashion, the fully-connected layers are shared across\nall spatial locations. This architecture is naturally implemented with an n×n convolutional layer followed\nby two sibling 1 × 1 convolutional layers (for reg and\ncls, respectively).\n3.1.1 Anchors\nAt each sliding-window location, we simultaneously\npredict multiple region proposals, where the number\nof maximum possible proposals for each location is\ndenoted as k. So the reg layer has 4k outputs encoding\nthe coordinates of k boxes, and the cls layer outputs\n2k scores that estimate probability of object or not\nobject for each proposal4\n. The k proposals are parameterized relative to k reference boxes, which we call\nanchors. An anchor is centered at the sliding window\nin question, and is associated with a scale and aspect\nratio (Figure 3, left). By default we use 3 scales and\n3 aspect ratios, yielding k = 9 anchors at each sliding\nposition. For a convolutional feature map of a size\nW × H (typically ∼2,400), there are W Hk anchors in\ntotal.\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},s=n(2968),o=n(3653);const c=e=>{let{data:t,children:n}=e;const{0:r,1:i}=(0,l.useState)(null),{siteUrl:c}=t.site.siteMetadata,{slug:m}=t.mdx.fields;return(0,l.useEffect)((()=>{if(!c||!m)return;const e=c.replace(/(^\w+:|^)\/\//,""),t=m.replace(/\//g,"");fetch("https://api.countapi.xyz/hit/"+e+"/"+t).then((e=>e.json())).then((e=>{let{value:t}=e;return i(t)})).catch((()=>i(0)))}),[c,m]),l.createElement(s.Z,null,r,l.createElement(a.Zo,{components:o.Z},n))};function m(e){return l.createElement(c,e,l.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-users-jeongdongha-code-toy-ha-4219-github-io-contents-posts-2022-02-10-fpn-mdx-6f8da90248667ee8a9a4.js.map