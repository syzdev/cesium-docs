---
title: 模型数据类型
---

::: warning 注意

文章来源：饼干教育

原文链接：http://www.bgteach.com/article/132

:::

![在这里插入图片描述](https://img-blog.csdnimg.cn/4cdde5c107eb4ec2b3418a08c6256187.png#pic_center)
## 前言：三维文件格式
三维软件之间互相导入导出一般会涉及到一些格式不兼容的问题，这里就给大家普及一下这些常用的三维文件格式。不同的格式有着不同的定位及用处，有开源的也有商业的。目前很多三维软件之间互导迫在眉睫，无论是使用什么三维软件确保文件能够在多个软件之间链接成为了必须马上解决的事情。

## .abc
![在这里插入图片描述](https://img-blog.csdnimg.cn/454a7b82ece2456683dfff53e5e2fb31.png#pic_center)

特效工作室： ILM、Sony Pictures与Imageworks, 共同开发了一个开放源码系统，目标是解决特效界共同的问题, 如何可以共享复杂的动态场景, 跨越不同的软体之间， 这个格式命名为Alembic ，英文直译为蒸馏机。本质上就是一个CG交换格式, 专注于有效地储存, 共享动画与特效场景, 跨越不同的应用程式或是软体, 包含了商业贩售的软体或是公司内部开发的软体, 客制化的工具组。

.abc 格式，中文名称：蒸馏机 - 支持动画、粒子等！bake三维场景的模型、流体、动画、特效等数据，输出输入到其他三维软件。注意是 bake（烘焙），有可能在导入其他三维软件中无法再二次编辑，比如：Rig、流体烟雾模拟等。不必多说，ABC将会是三维软件交互的王者。

## .glTF
![在这里插入图片描述](https://img-blog.csdnimg.cn/72677214f6ef4ec4ac0161aa06273b21.png#pic_center)

glTF是一种可以减少3D格式中与渲染无关的冗余数据并且在更加适合OpenGL簇加载的一种3D文件格式。glTF的提出是源自于3D工业和媒体发展的过程中，对3D格式统一化的急迫需求。如果用一句话来描述：glTF 就是三维文件的 JPEG ，三维格式的 MP3。在没有glTF的时候，大家都要花很长的的时间来处理模型的载入。很多的游戏引擎或者工控渲染引擎，都使用的是插件的方式来载入各种格式的模型。可是，各种格式的模型都包含了很多无关的信息。就glTF格式而言，虽然以前有很多3D格式，但是各种3D模型渲染程序都要处理很多种的格式。对于那些对载入格式不是那么重要的软件，可以显著减少代码量，所以也有人说，最大的受益者是那些对程序大小敏感的3D Web渲染引擎，只需要很少的代码就可以顺利地载入各种模型了。此外，glTF是对近二十年来各种3D格式的总结，使用最优的数据结构，来保证最大的兼容性以及可伸缩性。这就好比是本世纪初xml的提出。glTF使用json格式进行描述，也可以编译成二进制的内容：bglTF。glTF可以包括场景、摄像机、动画等，也可以包括网格、材质、纹理，甚至包括了渲染技术（technique）、着色器以及着色器程序。同时由于json格式的特点，它支持预留一般以及特定供应商的扩展。

.glTF 格式， - 支持动画等！.gITF 2.0 格式逐步的完成了 WebGL 的布局，也成为了这个领域的专用格式，随着发展游戏领域的应用也会越来越广泛。官网细节：[gltf](https://www.khronos.org/gltf/)。

## .fbx
![在这里插入图片描述](https://img-blog.csdnimg.cn/50b8d3d0e7b64e26b2d4e26a9431a89a.png#pic_center)
FBX 是 FilmBoX 这套软件所使用的格式，后改称 Motionbuilder。因为Motionbuilder扮演的是动作制作的平台，所以在前端的modeling和后端的rendering也都有赖于其它软件的配合，所以Motionbuilder在档案的转换上自然下了一番功夫。FBX最大的用途是用在诸如在 Max、Maya、Softimage 等软件间进行模型、材质、动作和摄影机信息的互导，这样就可以发挥 Max 和 Maya 等软件的优势。可以说，FBX 方案是非常好的互导方案。

.fbx 格式，Autodesk 家族格式 - 支持动画！这是一个商业的格式，兼容最好的当属 Autodesk 家族的软件了。fbx 也开放给了第三方软件，但总是感觉除了他自己的软件之外或多或少的都有解决不完的问题。 毋庸置疑，FBX 现在是最受欢迎的格式。

## .bvh
![在这里插入图片描述](https://img-blog.csdnimg.cn/71c3c15ce49e4ac5bb1d94b7808dfdbc.png#pic_center)

BVH 是BioVision等设备对人体运动进行捕获后产生文件格式的文件扩展名。BVH文件包含角色的骨骼和肢体关节旋转数据。BVH 是一种通用的人体特征动画文件格式,，广泛地被当今流行的各种动画制作软件支持。通常可从记录人类行为运动的运动捕获硬件获得。

.bvh 格式， 动作捕捉通用格式 - 骨骼动画数据！捕捉后的文件可以重复利用，应用在不同的角色骨骼驱动上制作动画。制作游戏、影视等方面的应用广泛。

## .obj
![在这里插入图片描述](https://img-blog.csdnimg.cn/3bc394b2e4a84598847811881656ed2f.png#pic_center)
OBJ文件是Alias|Wavefront公司为它的一套基于工作站的3D建模和动画软件"Advanced Visualizer"开发的一种标准3D模型文件格式，很适合用于3D软件模型之间的互导。目前几乎所有知名的3D软件都支持OBJ文件的读写。OBJ文件是一种文本文件，可以直接用写字板打开进行查看和编辑修改。

.obj 格式， 静态多边形模型 - 附带 UV 信息及材质路径！不包含动画、材质特性、贴图路径、动力学、粒子等信息。主要支持多边形(Polygons)模型。是最受欢迎的格式。

## .dae
![在这里插入图片描述](https://img-blog.csdnimg.cn/55182771576e4b769794ed1b500dd64c.png#pic_center)
DAE 是纯文本的模型格式，其本质就是一个单纯的xml文件。相比fbx，对dae格式模型的载入我们拥有非常高的自由控制，这也是最复杂的地方。基本上，dae文件内一开始就把数据分成了好几大块。对我们来说最为有用的是VisualScenes(包含场景骨骼节点树)、Nodes(与VisualScenes类似，两者或互为补充)、Geometries（网格数据）、Materials/Effects/Images（材质相关信息）、Controllers（骨骼信息数据）、Animations（动画数据）、AnimationClips（全局的动画信息），其中静态模型一般也就包括VisualScenes和Geometries。

.dae 格式， FBX 的代替品 - Collada DAE需要自行下载安装！Google 地图便是使用的 DAE 格式。

## .stl
![在这里插入图片描述](https://img-blog.csdnimg.cn/ab6ef9989eaf4c88a0efd08c0f2aae99.png#pic_center)
STL 文件是在计算机图形应用系统中，用于表示三角形网格的一种文件格式。 它的文件格式非常简单， 应用很广泛。STL是最多快速原型系统所应用的标准文件类型。STL是用三角网格来表现3D CAD模型。在STL文件中的三角面片的信息单元 facet 是一个带矢量方向的三角面片，STL三维模型就是由一系列这样的三角面片构成。

.stl 格式，三维打印的通用格式 - 三角面静态模型！文件格式简单，只能描述三维物体的几何信息，不支持颜色材质等信息，是计算机图形学处理CG、数字几何处理如CAD、 数字几何工业应用, 如三维打印机支持的最常见文件格式。

## .3ds
![在这里插入图片描述](https://img-blog.csdnimg.cn/efe187dfee6247be88a70b897608940e.png#pic_center)
3DS 文件越来越不受欢迎了。比较早的一种三维格式，三角面，最早游戏模型应用比较广泛。由于后期导入软件的不可编辑性、难以二次编辑现在逐渐的远离了我们的视线。

.3ds 格式 - 三角面静态模型！文件格式简单，现在几乎都以淘汰！应该在一些老的项目应用上才有可能会用到。

## .ply
![在这里插入图片描述](https://img-blog.csdnimg.cn/343ed990ded84bcc8dcaf648aedc0148.png#pic_center)

PLY 是一种电脑档案格式，全名为多边形档案（Polygon File Format）或 斯坦福三角形档案（Stanford Triangle Format）。 该格式主要用以储存立体扫描结果的三维数值，透过多边形片面的集合描述三维物体，与其他格式相较之下这是较为简单的方法。它可以储存的资讯包含颜色、透明度、表面法向量、材质座标与资料可信度，并能对多边形的正反两面设定不同的属性。在档案内容的储存上PLY有两种版本，分别是纯文字（ASCII）版本与二元码（binary）版本，其差异在储存时是否以ASCII编码表示元素资讯。

. ply 格式 - 静态多边形模型 - OBJ 格式的升级版！PLY格式受 Wavefront .obj 格式的启发，但改进了Obj格式所缺少的对任意属性及群组的扩充性。因此PLY格式发明了"property"及"element"这两个关键词，来概括“顶点、面、相关资讯、群组”的概念。

## .psk
![在这里插入图片描述](https://img-blog.csdnimg.cn/4745eb61c8cd42a789ad9c8debf12363.png#pic_center)
Psk 是 Epic Games Unreal Engine 的格式，也就是大名鼎鼎的虚幻游戏引擎的模型格式。虚幻游戏模型提取出来的就是 psk 格式。


.psk 格式 - Unral Engine 格式 - 带骨骼动画的模型！ psk 是 一个比较特殊的格式，通常情况下是原来提取游戏模型使用的。最终生成的基于虚幻引擎的游戏打包成这个格式的模型。

## .x3d
![在这里插入图片描述](https://img-blog.csdnimg.cn/6ce0847bcd1a49bdba6bc73637feee68.png#pic_center)
X3D 是一种专为万维网而设计的三维图像标记语言。全称可扩展三维（语言），是由Web3D联盟设计的，是 VRML 标准的最新的升级版本。 X3D 基于 XML 格式开发，所以可以直接使用 XML DOM 文档树、XML Schema 校验等技术和相关的 XML 编辑工具。目前 X3D 已经是通过 ISO 认证的国际标准。

.ply 格式 - Web3D 使用较多的格式 - 少量动画 WebGL 支持！支持多纹理和多遍绘制、支持 Shader 着色、支持多渲染目标(MRT)、支持几何实例(Geometry Instance)。

## .dxf
![在这里插入图片描述](https://img-blog.csdnimg.cn/a0a6e0f44f6a4185ba77b7aaacaca9c7.png#pic_center)
DXF 是一种开放的矢量数据格式，可以分为两类：ASCII格式和二进制格式；ASCII具有可读性好的特点，但占用的空间较大；二进制格式则占用的空间小、读取速度快。各种 CAD 软件中 DXF 被广泛使用，成为事实上的标准。绝大多数CAD系统都能读入或输出DXF文件。

.dxf 格式 - Drawing Exchange File - CAD 通用格式！一般都是CAD 矢量数据的交互格式。